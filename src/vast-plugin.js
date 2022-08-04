import videojs from 'video.js'
import {VASTClient, VASTParser, VASTTracker} from '@dailymotion/vast-client'
import handleVPAID from 'vpaid-handler'

const Plugin = videojs.getPlugin('plugin');

/**
 * Create Source Objects
 *
 * @param {Array<MediaFile>} mediaFiles  Array of media files
 * @return {Array} Array of source objects
 */
function createSourceObjects(mediaFiles) {
  return mediaFiles.map(mediaFile => ({type: mediaFile.mimeType, src: mediaFile.fileURL}));
}

/**
 * Determine if the VAST creative has a VPAID media file
 *
 * @param {Object} creative
 * @returns {boolean}
 */
function hasVPAID(creative) {
  const mediaFiles = creative.mediaFiles;
  for (let i = 0; i < mediaFiles.length; i++) {
    if (mediaFiles[i].apiFramework && mediaFiles[i].apiFramework === 'VPAID') {
      return true;
    }
  }
  return false;
}

/**
 *
 * @param {Object} ad
 * @returns {boolean}
 */
function doAllLinearCreativesRequireApiFramework(ad) {
  return ad.creatives
    .every(creative => doesCreativeRequireApiFramework(creative));
}

/**
 *
 * @param {Object} creative
 * @returns {boolean}
 */
function doesCreativeRequireApiFramework(creative) {
  return creative.mediaFiles.every(mediaFile => mediaFile && mediaFile.apiFramework);
}

/***
 *
 * @param {HTMLElement} skipButtonElement
 */
const isSkipEnabled = (skipButtonElement) => (' ' + skipButtonElement.className + ' ').indexOf(' enabled ') > -1;

/***
 *
 * @param {HTMLElement} skipButtonElement
 */
const enableSkip = (skipButtonElement) => {
  if (!isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className += ' enabled ';
  }
}

/***
 *
 * @param {HTMLElement} skipButtonElement
 */
const disableSkip = (skipButtonElement) => {
  if (isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className =
      skipButtonElement.className.replace(' enabled ', '');
  }
}

const linearFn = creative => creative.type === 'linear' && creative.mediaFiles.length;
const companionFn = creative => creative.type === 'companion';

/**
 * Holds related trackers together.
 * And from a tracker, we can access the ad, creative and variation.
 */
class GroupedTrackers {
  /**
   *
   * @param {VASTTracker} linearAdTracker
   * @param {VASTTracker} companionTracker
   */
  constructor(linearAdTracker, companionTracker) {
    this.linearAdTracker = linearAdTracker;
    this.companionTracker = companionTracker;
  }
}

const defaultOptions = {
  seekEnabled: false,
  controlsEnabled: false,
  wrapperLimit: 10,
  withCredentials: true,
  skip: 0,
  vpaid: {
    containerId: undefined,
    containerClass: 'vjs-vpaid-container',
    videoInstance: 'none'
  },
  companion: {
    elementId: null,
    maxWidth: 0,
    maxHeight: 0
  }
};

/**
 * VastPlugin
 */
class VastPlugin extends Plugin {

  /**
   * Constructor
   *
   * @param {Object} player The videojs object
   * @param {Object} options Plugin config
   */
  constructor(player, options) {
    super(player);

    // Could be initialized already by user
    if (typeof player.ads === 'function') {
      player.ads({debug: false});
    }

    /** @type {Object} */
    this.options = videojs.mergeOptions(defaultOptions, options || {});
    /** @type {VASTClient} */
    this.vastClient = new VASTClient();
    /** @type {Object} */
    this.originalPlayerState = {};
    /** @type {Object.<string, function>} */
    this.eventListeners = {};
    /** @type {Object.<string, HTMLElement>} */
    this.domElements = {}
    /** @type {GroupedTrackers[]} */
    this.trackers = [];
    /** @type {GroupedTrackers|null} */
    this.tracker = null;

    player.on('readyforpreroll', () => {
      const trackers = this.trackers;

      if (trackers.length === 1) {
        const linearAdTracker = trackers[0].linearAdTracker;
        const creative = linearAdTracker.creative
        if (creative.type === 'linear') {
          if (doesCreativeRequireApiFramework(creative)) {
            if (hasVPAID(creative)) {
              handleVPAID(player, linearAdTracker, videojs.mergeOptions(defaultOptions, options || {}));
              return;
            }
            else {
              this.player.trigger('adscanceled');
              return;
            }
          }
        }
        else {
          this.player.trigger('adscanceled');
          return;
        }
      }
      this._startPreroll();
    });

    this._getVastContent()
      .then((res) => this._handleVast(res))
      .catch(err => {
        this.player.trigger('adscanceled');
        // eslint-disable-next-line no-console
        console.log(`Ad cancelled: ${err.message}`);
      });
  }

  /**
   *
   * @param {Object} vastResponse
   * @private
   */
  _handleVast(vastResponse) {
    if (!vastResponse.ads || vastResponse.ads.length === 0) {
      this.player.trigger('adscanceled');
      return;
    }

    const adsWithLinear = vastResponse.ads
      .filter(ad => ad.creatives.some(linearFn));

    if (!adsWithLinear.length) {
      this.player.trigger('adscanceled');
      return;
    }

    const adPod = adsWithLinear
      .filter(ad => ad.sequence)
      // TODO: support VPAID in ad pods?
      .filter(ad => !doAllLinearCreativesRequireApiFramework(ad))
      .sort((ad1, ad2) => ad1.sequence - ad2.sequence);

    const standaloneAds = adsWithLinear.filter(ad => !adPod.includes(ad))

    if (adPod.length) {
      this.trackers = adPod.map(ad => this._createGroupedTrackers(ad));
    }
    else {
      const [ad] = standaloneAds;
      this.trackers = [this._createGroupedTrackers(ad)];
    }

    this.player.trigger('adsready');
  }

  /**
   *
   * @param {Object} ad
   * @returns {GroupedTrackers}
   * @private
   */
  _createGroupedTrackers(ad) {
    const onClickThrough = (url) => {
      window.open(url, '_blank');
    };

    const linearAdTracker =
      new VASTTracker(this.vastClient, ad, ad.creatives.find(linearFn), ad.creatives.find(companionFn));
    linearAdTracker.on('clickthrough', onClickThrough);

    let companionAdTracker = null;
    const companionCreative = ad.creatives.find(companionFn);
    if (companionCreative) {
      // Just pick the first suitable companion ad for now
      const options = this.options;
      const variation = companionCreative.variations
        .filter(v => v.staticResource)
        .filter(v => v.type.indexOf('image') === 0)
        .find(v => parseInt(v.width) <= options.companion.maxWidth && parseInt(v.height) <= options.companion.maxHeight);
      if (variation) {
        companionAdTracker = new VASTTracker(this.vastClient, ad, companionCreative, variation);
        companionAdTracker.on('clickthrough', onClickThrough);
      }
    }

    return new GroupedTrackers(linearAdTracker, companionAdTracker);
  }

  /**
   *
   * @private
   */
  _showCompanion() {
    const companionTracker = this.tracker.companionTracker;
    const dest = window.document.getElementById(this.options.companion.elementId);

    if (companionTracker && companionTracker.variation && dest) {
      const variation = companionTracker.variation;

      const onClick = () => {
        companionTracker.click();
      }

      const hyperLink = document.createElement("a");
      hyperLink.src = "#";
      hyperLink.addEventListener("click", onClick);

      const image = document.createElement("img");
      image.src = variation.staticResource;

      hyperLink.appendChild(image);

      dest.innerHTML = "";
      dest.appendChild(hyperLink)
    }
    else if (dest) {
      // TODO: option to remove last companion ad when content plays?
      dest.innerHTML = "";
    }
  }

  /**
   * Get Vast Content
   *
   * @returns {Promise<Object>}
   * @private
   */
  _getVastContent() {
    let {url, xml} = this.options;

    if (url) {
      return this.vastClient.get(url, {withCredentials: this.options.withCredentials, wrapperLimit: this.options.wrapperLimit});
    }
    else if (xml) {
      const vastParser = new VASTParser();

      let xmlDocument;
      if (xml.constructor === window.XMLDocument) {
        xmlDocument = xml;
      }
      else if (xml.constructor === String) {
        xmlDocument = (new window.DOMParser()).parseFromString(xml, 'text/xml');
      }
      else {
        throw new Error('xml config option must be a String or XMLDocument');
      }

      return vastParser.parseVAST(xmlDocument);
    }
    else {
      return Promise.reject(new Error('url or xml option not set'));
    }
  }

  /**
   * Do Pre-roll
   *
   * @private
   */
  _startPreroll() {
    const player = this.player;
    const options = this.options;

    player.ads.startLinearAdMode();

    this.originalPlayerState.controlsEnabled = player.controls();
    player.controls(options.controlsEnabled);

    this.originalPlayerState.seekEnabled = player.controlBar.progressControl.enabled();
    if (options.seekEnabled) {
      player.controlBar.progressControl.enable();
    } else {
      player.controlBar.progressControl.disable();
    }

    const blocker = window.document.createElement('div');

    blocker.className = 'vast-blocker';
    blocker.onclick = () => {
      if (player.paused()) {
        player.play();
        return false;
      }
      this.tracker.linearAdTracker.click();
    };

    this.domElements.blocker = blocker;
    player.el().insertBefore(blocker, player.controlBar.el());

    const skipButton = window.document.createElement('div');

    skipButton.className = 'vast-skip-button';
    skipButton.style.display = 'none';
    this.domElements.skipButton = skipButton;
    player.el().appendChild(skipButton);

    this.eventListeners.adtimeupdate = () => this._timeUpdate();
    player.one('adplay', () => {
      if (this.options.skip > 0 && player.duration() >= this.options.skip) {
        skipButton.style.display = 'block';
        player.on('adtimeupdate', this.eventListeners.adtimeupdate);
      }
      this.player.loadingSpinner.el().style.display = 'none';
    });

    this.eventListeners.teardown = () => this._endPreroll();

    skipButton.onclick = (e) => {
      if ((' ' + skipButton.className + ' ').indexOf(' enabled ') >= 0) {
        this.tracker.linearAdTracker.skip();
        this._playNextTrackedAd();
      }
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    this._setupEvents();

    this._playNextTrackedAd();
  }

  /**
   *
   * @private
   */
  _playNextTrackedAd() {
    const nextTracker = this.trackers.shift();
    if (nextTracker) {
      this.tracker = nextTracker;
      this.player.src(createSourceObjects(this.tracker.linearAdTracker.creative.mediaFiles));

      this._showCompanion();
    }
    else {
      this.eventListeners.teardown();
    }
  }

  /**
   * Time Update
   *
   * @private
   */
  _timeUpdate() {
    const player = this.player;

    player.loadingSpinner.el().style.display = 'none';

    const timeLeft = Math.ceil(this.options.skip - player.currentTime());

    const skipButtonElement = this.domElements.skipButton;
    if (timeLeft > 0) {
      disableSkip(skipButtonElement);
      this.domElements.skipButton.innerHTML = 'Skip in ' + timeLeft + '...';
    }
    else {
      enableSkip(skipButtonElement);
      this.domElements.skipButton.innerHTML = 'Skip';
    }
  }

  /**
   * Tear Down
   *
   * @private
   */
  _endPreroll() {
    Object.values(this.domElements)
      .filter(el => el.parentNode)
      .forEach(el => el.parentNode.removeChild(el));

    const player = this.player;

    player.off('adtimeupdate', this.eventListeners.adtimeupdate);

    player.ads.endLinearAdMode();

    player.controls(this.originalPlayerState.controlsEnabled);

    if (this.originalPlayerState.seekEnabled) {
      player.controlBar.progressControl.enable();
    } else {
      player.controlBar.progressControl.disable();
    }

    player.trigger('vast-done');
  }

  /**
   * Setup Events
   *
   * @private
   */
  _setupEvents() {
    const player = this.player;
    const thisPlugin = this;

    const adPlayFn = function() {
      thisPlugin.tracker.linearAdTracker.trackImpression();
    };

    const timeupdateFn = function() {
      if (isNaN(thisPlugin.tracker.linearAdTracker.assetDuration)) {
        thisPlugin.tracker.linearAdTracker.assetDuration = player.duration();
      }
      thisPlugin.tracker.linearAdTracker.setProgress(player.currentTime());
    };

    const pauseFn = function() {
      if (player.remainingTime() > 0) {
        thisPlugin.tracker.linearAdTracker.setPaused(true);
        player.one('adplay', function() {
          thisPlugin.tracker.linearAdTracker.setPaused(false);
        });
      }
    };

    const adErrorFn = (/*err*/) => {
      const MEDIAFILE_PLAYBACK_ERROR = '405';
      thisPlugin.tracker.linearAdTracker.errorWithCode(MEDIAFILE_PLAYBACK_ERROR);
      // Do not want to show VAST related errors to the user
      player.error(null);
      this._playNextTrackedAd();
    };

    const fullScreenFn = function() {
      // for 'fullscreen' & 'exitfullscreen'
      thisPlugin.tracker.linearAdTracker.setFullscreen(player.isFullscreen());
    };

    const muteFn = (function() {
      let previousMuted = player.muted();
      let previousVolume = player.volume();

      return function() {
        const volumeNow = player.volume();
        const mutedNow = player.muted();

        if (previousMuted !== mutedNow) {
          thisPlugin.tracker.linearAdTracker.setMuted(mutedNow);
          previousMuted = mutedNow;
        } else if (previousVolume !== volumeNow) {
          if (previousVolume > 0 && volumeNow === 0) {
            thisPlugin.tracker.linearAdTracker.setMuted(true);
          } else if (previousVolume === 0 && volumeNow > 0) {
            thisPlugin.tracker.linearAdTracker.setMuted(false);
          }

          previousVolume = volumeNow;
        }
      };
    })();

    const adEndedFn = () => {
      // Ad ended, not skipped
      thisPlugin.tracker.linearAdTracker.complete();
      thisPlugin._playNextTrackedAd();
    };

    player.on('adended', adEndedFn);
    player.on('adplay', adPlayFn);
    player.on('adtimeupdate', timeupdateFn);
    player.on('adpause', pauseFn);
    player.on('aderror', adErrorFn);
    player.on('advolumechange', muteFn);
    player.on('fullscreenchange', fullScreenFn);

    player.one('vast-done', function() {
      player.off('adplay', adPlayFn);
      player.off('adtimeupdate', timeupdateFn);
      player.off('adpause', pauseFn);
      player.off('aderror', adErrorFn);
      player.off('advolumechange', muteFn);
      player.off('fullscreenchange', fullScreenFn);
      player.off('adended', adEndedFn)
    });
  }
}

videojs.registerPlugin('vast', VastPlugin);
