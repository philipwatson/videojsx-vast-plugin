import videojs from 'video.js';
import {VASTClient, VASTParser} from '@dailymotion/vast-client';
import document from 'global/document.js';
import {UI} from './ui.mjs';
import {AdLoader} from './ad-loader.mjs';
import {AdSelector} from './ad-selector.mjs';
import {VPAIDHandler} from './vpaid-handler.mjs';
import {createVASTContext} from "./event.mjs";
import {once, cloneJson, convertOffsetToSeconds} from "./utils.mjs";

const Plugin = videojs.getPlugin('plugin');

const DEFAULT_OPTIONS = Object.freeze({
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
});

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
      player.ads({debug: false, liveCuePoints: false});
    }

    player.on('play', function() {
      console.log('play event triggered');
    });

    console.log(`videojsx-vast-plugin running`);

    const mergeOptionsFunction = parseInt(videojs.VERSION, 10) >= 8 ? videojs.obj.merge : videojs.mergeOptions;
    options = mergeOptionsFunction(DEFAULT_OPTIONS, options || {});

    /** @type {VASTClient} */
    const vastClient = new VASTClient();
    /** @type {TrackedAd[]} */
    const ads = [];
    /** @type {TrackedAd|null} */
    let currentAd = null;
    /** @type {Number} */
    let adCount = 0;
    /** @type {Number} */
    let adTotal = 0;
    /** @type {VPAIDHandler} */
    const vpaidHandler = new VPAIDHandler(player, options);
    /** @type {boolean} */
    let timedOut = false;

    let schedule = options.schedule;
    if (schedule == null || schedule.length === 0) {
      schedule = [
        {
          offset: 0,
          url: options.url || null,
          xml: options.xml || null
        }
      ]
    } else {
      schedule = cloneJson(schedule);
      schedule.forEach(item => delete item.offsetInSeconds);
    }

    const preRollScheduleItem = findFirstPreroll(schedule);
    const postRollScheduleItem = findFirstPostroll(schedule);
    const midRollScheduleItems = findAllMidrolls(schedule).sort((a, b) => a.offset - b.offset);

    const autoplay = player.autoplay();

    player.on('adtimeout', () => {
      // failed to show an ad on time when in the "play" state
      timedOut = true;
    });

    const ui = new UI(player, options);

    function skip () {
      if (currentAd?.hasVideoMedia()) {
        currentAd.linearAdTracker.skip();
        player.trigger({
          type: 'vast.skipAd',
          vast: createVASTContext(currentAd.linearAdTracker)
        });
        playNextAd();
      }
    }

    ui.on('skip', skip);
    ui.on('click', () => {
      currentAd.linearAdTracker.click();
    });

    const onTimeUpdate = (() => {
      let lock = false;
      return () => {
        if (lock) return;

        let offsetInSeconds = null;
        while (midRollScheduleItems.length > 0) {
          offsetInSeconds = midRollScheduleItems[0].offsetInSeconds;
          if (offsetInSeconds != null) {
            break;
          }
          const {offset} = midRollScheduleItems[0];
          offsetInSeconds = convertOffsetToSeconds(offset, player.duration());
          if (offsetInSeconds == null) {
            midRollScheduleItems.shift();
          } else {
            midRollScheduleItems[0].offsetInSeconds = offsetInSeconds;
          }
        }

        if (offsetInSeconds != null) {
          if (this.player.currentTime() > offsetInSeconds) {
            lock = true;
            const scheduleItem = midRollScheduleItems.shift();
            adLoader.loadAds(scheduleItem)
              .then(trackedAds => {
                if (trackedAds.length > 0) {
                  ads.push(...trackedAds);
                  currentAd = null;
                  startAdBreak();
                }
              })
              .catch(err => {
                // eslint-disable-next-line no-console
                console.log(`An error occurred when loading ads for the midroll ad break: : ${err?.message}`);
              })
              .finally(() => {
                lock = false;
              });
          }
        }
      }
    })();

    if (midRollScheduleItems.length > 0) {
      player.on('timeupdate', onTimeUpdate);
    }

    player.on('readyforpostroll', () => {
      timedOut = false;
      adLoader.loadAds(postRollScheduleItem)
        .then(trackedAds => {
          if (timedOut) {
            trackedAds.forEach(ad => {
              ad.linearAdTracker.error({
                ERRORCODE: 301 // VAST redirect timeout reached
              });
            })
          }
          else if (trackedAds.length > 0) {
            ads.push(...trackedAds);
            currentAd = null;
            startAdBreak();
          }
          else {
            player.trigger('nopostroll');
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(`An error occurred when loading ads for the postroll ad break: : ${err.message}`);
          player.trigger('nopostroll');
        })
    });

    player.on('readyforpreroll', () => {
      startAdBreak();
    });

    const signalAdsReady = once(() => {
      // Can only signal 'adsready' in Preroll and BeforePreroll states (in videojs-contrib-ads).
      // So we need to signal even when we have no pre-rolls - because we may get mid or post rolls later.
      player.trigger('adsready');
    })

    // TODO: calculate reasonable timeout based on contrib-ads settings
    setTimeout(signalAdsReady, 3000);

    const adLoader = new AdLoader(vastClient, new VASTParser(), new AdSelector(), options);
    adLoader.loadAds(preRollScheduleItem)
      .then(trackedAds => {
        if (timedOut) {
          trackedAds.forEach(ad => {
            ad.linearAdTracker.error({
              ERRORCODE: 301 // VAST redirect timeout reached
            });
          })
        }
        else if (trackedAds.length > 0) {
          ads.push(...trackedAds);
          currentAd = null;
          // do not start ad break here
        }
        else {
          player.trigger('nopreroll');
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(`An error occurred when loading ads for the preroll ad break: ${err.message}`);
        player.trigger('nopreroll');
      })
      .finally(() => {
        signalAdsReady();
        if (autoplay) {
          player.play();
        }
      });

    /**
     * Create Source Objects
     *
     * @param {Array<MediaFile>} mediaFiles  Array of media files
     * @return {Array} Array of source objects
     */
    const createSourceObjects = (mediaFiles) => {
      return mediaFiles
        .filter(mediaFile => mediaFile.apiFramework == null)
        .map(mediaFile => ({type: mediaFile.mimeType, src: mediaFile.fileURL}));
    }

    const playNextAd = () => {
      const nextAd = ads.shift();

      // do not change ui for vpaid
      if (nextAd?.hasVideoMedia()) {
        if (!currentAd?.hasVideoMedia()) {
          ui.setUp();
        }
      } else {
        if (currentAd?.hasVideoMedia()) {
          ui.tearDown();
        }
      }

      if (nextAd) {
        currentAd = nextAd;
        adCount++;
        console.log(`Playing ad ${adCount}/${adTotal}`);

        if (currentAd.hasVideoMedia()) {
          const allMediaFiles = currentAd.linearCreative.mediaFiles;

          const streamingMediaFiles = allMediaFiles
            .filter(mediaFile => mediaFile.deliveryType === 'streaming')

          const nonStreamingMediaFiles = allMediaFiles
            .filter(mediaFile => mediaFile.deliveryType !== 'streaming');

          if (nonStreamingMediaFiles.length > 0) {
            player.src(createSourceObjects(nonStreamingMediaFiles));
          }
          else if (streamingMediaFiles.length > 0) {
            let assetDuration = currentAd.linearAdTracker.assetDuration;
            if (assetDuration == null || assetDuration < 1) {
              console.log('Streaming ads must have a duration');
              playNextAd();
              return;
            }
            player.src(createSourceObjects(streamingMediaFiles));
            currentAd.skipAfterDuration = true;
          }
          ui.duration = currentAd.linearAdTracker.assetDuration || 0;
        } else {
          vpaidHandler.handle(currentAd.linearAdTracker)
            .then(() => {
              playNextAd();
            })
            .catch(err => {
              console.log(err);
              playNextAd();
            });
        }
        showCompanionAd();
      } else {
        currentAd = null;
        adCount = 0;
        endAdBreak();
      }
    }

    const {setUpEvents, tearDownEvents} = (() => {
      const adPlayFn = () => {
        if (currentAd.skipAfterDuration) {
          const ad = currentAd;
          setTimeout(() => {
            if (currentAd === ad) {
              skip();
            }
          }, ad.linearAdTracker.assetDuration * 1000);
        }

        if (!currentAd.linearAdTracker.impressed && currentAd.hasVideoMedia()) {
          currentAd.linearAdTracker.trackImpression();
          player.trigger({
            type: 'vast.adStart',
            vast: createVASTContext(currentAd.linearAdTracker)
          });
        }
      };

      const timeupdateFn = () => {
        if (currentAd) {
          if (isNaN(currentAd.linearAdTracker.assetDuration)) {
            currentAd.linearAdTracker.assetDuration = player.duration();
          }
          currentAd.linearAdTracker.setProgress(player.currentTime());
        }
      };

      const pauseFn = () => {
        if (player.remainingTime() > 0) {
          currentAd.linearAdTracker.setPaused(true);
          player.one('adplay', () => {
            currentAd.linearAdTracker.setPaused(false);
          });
        }
      };

      // args: err
      const adErrorFn = () => {
        const MEDIAFILE_PLAYBACK_ERROR = 405;
        currentAd.linearAdTracker.error({ERRORCODE: MEDIAFILE_PLAYBACK_ERROR});
        // Do not want to show VAST related errors to the user
        player.error(null);
        playNextAd();
      };

      const fullScreenFn = () => {
        // for 'fullscreen' & 'exitfullscreen'
        currentAd.linearAdTracker.setFullscreen(player.isFullscreen());
      };

      const muteFn = (() => {
        let previousMuted = player.muted();
        let previousVolume = player.volume();

        return () => {
          const volumeNow = player.volume();
          const mutedNow = player.muted();

          if (previousMuted !== mutedNow) {
            currentAd.linearAdTracker.setMuted(mutedNow);
            previousMuted = mutedNow;
          } else if (previousVolume !== volumeNow) {
            if (previousVolume > 0 && volumeNow === 0) {
              currentAd.linearAdTracker.setMuted(true);
            } else if (previousVolume === 0 && volumeNow > 0) {
              currentAd.linearAdTracker.setMuted(false);
            }

            previousVolume = volumeNow;
          }
        };
      })();

      const adEndedFn = () => {
        // Ad ended, not skipped
        if (currentAd.hasVideoMedia()) {
          currentAd.linearAdTracker.complete();
          player.trigger({
            type: 'vast.adEnd',
            vast: createVASTContext(currentAd.linearAdTracker)
          });
          playNextAd();
        }
      };

      return {
        setUpEvents: () => {
          player.on('adended', adEndedFn);
          player.on('adplay', adPlayFn);
          player.on('adtimeupdate', timeupdateFn);
          player.on('adpause', pauseFn);
          player.on('aderror', adErrorFn);
          player.on('advolumechange', muteFn);
          player.on('fullscreenchange', fullScreenFn);
        },
        tearDownEvents: () => {
          player.off('adended', adEndedFn);
          player.off('adplay', adPlayFn);
          player.off('adtimeupdate', timeupdateFn);
          player.off('adpause', pauseFn);
          player.off('aderror', adErrorFn);
          player.off('advolumechange', muteFn);
          player.off('fullscreenchange', fullScreenFn);
        }
      }
    })();

    const showCompanionAd = () => {
      const companionTracker = currentAd.companionTracker;
      const dest = document.getElementById(options.companion.elementId);

      if (companionTracker && companionTracker.variation && dest) {
        const variation = companionTracker.variation;

        const onClick = () => {
          companionTracker.click();
        };

        const hyperLink = document.createElement('a');

        hyperLink.src = '#';
        hyperLink.addEventListener('click', onClick);

        const image = document.createElement('img');

        image.src = variation.staticResource;

        hyperLink.appendChild(image);

        dest.innerHTML = '';
        dest.appendChild(hyperLink);
      } else if (dest) {
        // TODO: option to remove last companion ad when content plays?
        dest.innerHTML = '';
      }
    }

    const startAdBreak = () => {
      adTotal = ads.length;
      console.log(`Playing ${adTotal} ads`);
      player.ads.startLinearAdMode();
      setUpEvents();
      playNextAd();
    }

    function isPreroll(scheduleItem) {
      return scheduleItem.offset === 0 || scheduleItem.offset == null || scheduleItem.offset === 'pre'
    }

    function isPostroll(scheduleItem) {
      return scheduleItem.offset === 'post';
    }

    function findFirstPreroll(schedule) {
      return schedule.find(isPreroll);
    }

    function findFirstPostroll(schedule) {
      return schedule.find(isPostroll);
    }

    function findAllMidrolls(schedule) {
      return schedule.filter(item => !isPreroll(item) && !isPostroll(item));
    }

    const endAdBreak = () => {
      player.ads.endLinearAdMode();
      tearDownEvents();
      console.log('Playing content');
    }
  }
}

videojs.registerPlugin('vast', VastPlugin);
