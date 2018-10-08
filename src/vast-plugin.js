import videojs from 'video.js';
import 'videojs-contrib-ads'; // Contrib Ads plugin registers itself
import { VASTClient, VASTTracker } from 'vast-client'


const Plugin = videojs.getPlugin('plugin');

function createSourceObjects(mediaFiles) {
  return mediaFiles.map(mediaFile => ({type: mediaFile.mimeType, src: mediaFile.fileURL}));
}

const defaultOptions = {
  seekEnabled: false,
  controlsEnabled: false,
  wrapperLimit: 10,
  withCredentials: true
};

export default class VastPlugin extends Plugin {
  constructor(player, options) {
    super(player);

    player.ads({debug:true});

    options = videojs.mergeOptions(defaultOptions, options || {});

    this.options = options;

    this.vastClient = new VASTClient();
    this.originalPlayerState = {};
    this.eventListeners = {};
    this.domElements = {};

    player.on('play', () => {
      this._getVastContent(options.url);
    });

    player.on('contentchanged', () => {
      console.log("Content changed");
    });


    player.on('readyforpreroll', () => {
      if (!options.url) {
        player.trigger('adscanceled');
        return;
      }

      this._doPreroll();
    });

  }

  _getVastContent(url) {
    const options = this.options;
    this.vastClient.get(url, {withCredentials: options.withCredentials, wrapperLimit: options.wrapperLimit})
      .then(res => {

        const linearFn = creative => creative.type === 'linear';
        const companionFn = creative => creative.type === 'companion';

        const adWithLinear = res.ads.find(ad => ad.creatives.some(linearFn));

        const linearCreative = adWithLinear.creatives.find(linearFn);

        const companionCreative = adWithLinear.creatives.find(companionFn);

        this.sources = createSourceObjects(linearCreative.mediaFiles);

        this.tracker = new VASTTracker(this.vastClient, adWithLinear, linearCreative, companionCreative);

        if (this.sources.length) {
          this.player.trigger('adsready');
        }
        else {
          this.player.trigger('adscanceled');
        }
      })
      .catch(err => {
        this.player.trigger('adscanceled');
        console.error(err);
      });
  }

  _doPreroll() {
    const player = this.player;
    const options = this.options;

    player.ads.startLinearAdMode();

    this.originalPlayerState.controlsEnabled = player.controls();
    player.controls(options.controlsEnabled);

    this.originalPlayerState.seekEnabled = player.controlBar.progressControl.enabled();
    if (options.seekEnabled) {
      player.controlBar.progressControl.enable();
    }
    else {
      player.controlBar.progressControl.disable();
    }


    player.src(this.sources);

    const blocker = window.document.createElement('div');
    blocker.className = 'vast-blocker';
    blocker.onclick = () => {
      if (player.paused()) {
        player.play();
        return false;
      }
      this.tracker.click();
    };


    this.tracker.on('clickthrough', url => {
      window.open(url, '_blank');
    });

    this.domElements.blocker = blocker;
    player.el().insertBefore(blocker, player.controlBar.el());

    const skipButton = window.document.createElement('div');
    skipButton.className = 'vast-skip-button';
    if (this.options.skip < 0) {
      skipButton.style.display = 'none';
    }
    this.domElements.skipButton = skipButton;
    player.el().appendChild(skipButton);

    this.eventListeners.adtimeupdate = () => this._timeUpdate();
    player.on('adtimeupdate', this.eventListeners.adtimeupdate);

    this.eventListeners.teardown = () => this._tearDown();

    skipButton.onclick = (e) => {
      if((' ' + skipButton.className + ' ').indexOf(' enabled ') >= 0) {
        this.tracker.skip();
        this.eventListeners.teardown();
      }
      if(window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      }
      else {
        return false;
      }
    };

    this._setupEvents();

    player.one('adended', this.eventListeners.teardown);
  }

  _timeUpdate () {
    const player = this.player;
    player.loadingSpinner.el().style.display = 'none';
    const timeLeft = Math.ceil(this.options.skip - player.currentTime());
    if(timeLeft > 0) {
      this.domElements.skipButton.innerHTML = 'Skip in ' + timeLeft + '...';
    } else {
      if((' ' + this.domElements.skipButton.className + ' ').indexOf(' enabled ') === -1) {
        this.domElements.skipButton.className += ' enabled ';
        this.domElements.skipButton.innerHTML = 'Skip';
      }
    }
  }

  _tearDown() {
    Object.values(this.domElements).forEach(el => el.parentNode.removeChild(el));
    const player = this.player;

    player.off('adtimeupdate', this.eventListeners.adtimeupdate);

    player.ads.endLinearAdMode();

    player.controls(this.originalPlayerState.controlsEnabled);

    if (this.originalPlayerState.seekEnabled) {
      player.controlBar.progressControl.enable();
    }
    else {
      player.controlBar.progressControl.disable();
    }

    player.trigger('vast-done');
  }

  _setupEvents() {
    const player = this.player;
    const tracker = this.tracker;

    let errorOccurred = false;

    const canplayFn = function() {
        tracker.trackImpression();
    };

    const timeupdateFn = function() {
        if (isNaN(tracker.assetDuration)) {
          tracker.assetDuration = player.duration();
        }
        tracker.setProgress(player.currentTime());
    };

    const pauseFn = function () {
      tracker.setPaused(true);
      player.one('adplay', function () {
        tracker.setPaused(false);
      });
    };

    const errorFn = function () {
      const MEDIAFILE_PLAYBACK_ERROR = '405';
      tracker.errorWithCode(MEDIAFILE_PLAYBACK_ERROR);
      errorOccurred = true;
      this.eventListeners.teardown();
      // ?? player.trigger('ended');
    };

    const fullScreenFn = function() {
      // for 'fullscreen' & 'exitfullscreen'
      tracker.setFullscreen(player.isFullscreen());
    };

    const muteFn = (function(){
      let previousMuted = player.muted();
      let previousVolume = player.volume();

      return function() {
        const volumeNow = player.volume();
        const mutedNow = player.muted();

        if (previousMuted !== mutedNow) {
          tracker.setMuted(mutedNow);
          previousMuted = mutedNow;
        }
        else if (previousVolume !== volumeNow) {
          if (previousVolume > 0 && volumeNow === 0) {
            tracker.setMuted(true);
          }
          else if (previousVolume === 0 && volumeNow > 0) {
            tracker.setMuted(false);
          }

          previousVolume = volumeNow;
        }
      }
    })();

    player.on('adcanplay', canplayFn);
    player.on('adtimeupdate', timeupdateFn);
    player.on('adpause', pauseFn);
    player.on('aderror', errorFn);
    player.on('advolumechange', muteFn);
    player.on('fullscreenchange', fullScreenFn);


    player.one('vast-done', function() {
      player.off('adcanplay', canplayFn);
      player.off('adtimeupdate', timeupdateFn);
      player.off('adpause', pauseFn);
      player.off('aderror', errorFn);
      player.off('advolumechange', muteFn);
      player.off('fullscreenchange', fullScreenFn);

      if (!errorOccurred) {
        tracker.complete();
      }
    });
  }
}
