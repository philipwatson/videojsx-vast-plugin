import VPAIDHTML5Client from 'vpaid-html5-client';
import window from 'global/window.js';
import document from 'global/document.js';
import {once} from './utils.mjs';
import {createVASTContext} from "./event.mjs";

const VALID_TYPES = ['application/x-javascript', 'text/javascript', 'application/javascript'];

export class VPAIDHandler {
  #forceStopDone
  #cancelled
  #started
  #player
  #options
  #eventTarget
  #volume
  #muted
  #controlBar

  constructor(player, options) {
    this.#player = player;
    this.#options = options;
    this.#eventTarget = new videojs.EventTarget();
  }

  handle(tracker) {
    this.#cancelled = false;
    this.#started = false
    this.#forceStopDone = false;

    this.setVolume(this.#player.volume());

    return new Promise((resolve, reject) => {
      const options = this.#options;
      const player = this.#player;
      /**
       *
       * @type {HTMLElement|null}
       */
      let container = null;

      /**
       * "timeout" | Error
       * @param {string|Error} err
       * @param adUnit
       */
      const adUnitLoad = (err, adUnit) => {
        let videoElement;

        if (err) {
          reject(err);
          return;
        }

        const onAdComplete = () => {
          cleanUp();
          resolve();
          player.trigger('vpaid.AdStopped');
          player.trigger({
            type: 'vast.adEnd',
            vast: createVASTContext(tracker)
          })
        };

        adUnit.subscribe('AdStopped', onAdComplete);

        const forceStopAd = err => {
          if (adUnit && !this.#forceStopDone) {
            adUnit.unsubscribe('AdStopped', onAdComplete);
            const onAdCancel = () => {
              this.#forceStopDone = true;
              cleanUp();
              reject(err);
              player.trigger('vpaid.AdStopped');
            };
            subscribeWithTimeout(adUnit, 'AdStopped', onAdCancel, onAdCancel);
            adUnit.stopAd();
          }
          else {
            this.#forceStopDone = true;
            reject(err);
          }
        }

        this.#eventTarget.on('forceStopAd', forceStopAd);

        if (this.#cancelled) {
          forceStopAd('Received cancel signal from player');
          return;
        }

        const cleanUp = () => {
          this.removeMuteControl();
          player.controlBar.show();

          player.off('playerresize', resizeAd);

          vpaidClient.destroy();

          if (container) {
            container.parentElement.removeChild(container);
            container = null;
          }
        }

        const onHandShake = (error, version) => {
          if (error) {
            log.console(error);
            forceStopAd('Error on VPAID handshake');
            return;
          }

          const creativeData = {
            AdParameters: creative.adParameters || '',
            Duration: creative.duration || 30,
            SkipTime: options.skip,
            ClickURL: creative.videoClickThroughURLTemplate?.url || 'about:blank',
            All: creative,
            Options: options,
          };

          /*
            NOTE: 'slot' and 'videoSlot' are handled by the VPAIDHTML5Client.
            We can provide 'videoSlot' via the VPAIDHTML5Client constructor. But not the 'slot'.
            The 'slot' will be created by the VPAIDHTML5Client (<div class="ad-element"></div>).
            This 'slot' is not the same as the VPAID container. The VPAID container sits within
            video.js elements (at time of writing, before the control bar) and will house the VPAID
            friendly iframe (with a parent div). So if the VPAID container is:
            <div class="vjs-vpaid-container"></div>
            then it'll look like:
            <div class="vjs-vpaid-container"><div><iframe src="about:blank"><div class="ad-element"><!-- VPAID script runs here --></div></iframe></div></div>
           */
          const environmentVars = {
            // WARNING: do not add the 'slot' or 'videoSlot' here! Read comment above.
            // videoSlotCanAutoPlay: true
          };

          subscribeWithTimeout(adUnit, 'AdLoaded', onAdLoaded, forceStopAd);

          const viewMode = player.isFullscreen() ? 'fullscreen' : 'normal';

          adUnit.subscribe('AdError', message => {
            // General VPAID Error = 901 (in VAST 3 spec)
            tracker.error({ERRORCODE: 901});
            this.#forceStopDone = true;
            cleanUp();
            reject(`Fatal VPAID Error: ${typeof message === 'object' ? JSON.stringify(message) : message}`);
            player.trigger({type: 'vpaid.AdError', error: message});
          });

          adUnit.initAd(player.currentWidth(), player.currentHeight(), viewMode, -1, creativeData, environmentVars);
        }

        const onAdLoaded = () => {
          if (this.#cancelled) {
            forceStopAd('Received cancel signal');
            return;
          }

          adUnit.subscribe('AdSkipped', () => {
            tracker.skip();
            player.trigger('vpaid.AdSkipped');
            player.trigger({
              type: 'vast.adSkip',
              vast: createVASTContext(tracker)
            })
          });

          adUnit.subscribe('AdVolumeChange', () => {
            adUnit.getAdVolume((error, currentVolume) => {
              if (error) return;
              const lastVolume = this.#volume

              if (currentVolume === 0 && lastVolume > 0) {
                tracker.setMuted(true);
              } else if (currentVolume > 0 && lastVolume === 0) {
                tracker.setMuted(false);
              }

              this.setVolume(currentVolume);

              // keep our player in sync
              player.volume(currentVolume);

              player.trigger('vpaid.AdVolumeChange');
            });
          });

          adUnit.subscribe('AdImpression', () => {
            // will also trigger createView
            tracker.trackImpression();
            player.trigger('vpaid.AdImpression');
          });


          adUnit.subscribe('AdClickThru',
            /**
             *
             * @param {string} url
             * @param {string} id
             * @param {boolean} playerHandles
             */
            ({url, id, playerHandles}) => {
              if (!playerHandles) {
                tracker.once('clickthrough', resolvedUrl => {
                  window.open(resolvedUrl, '_blank');
                });
              }
              // The url here is a fallback - the tracker will use VAST click url if it exists.
              tracker.click(url);
              player.trigger('vpaid.AdClickThru');
            }
          );

          adUnit.subscribe('AdVideoFirstQuartile', () => {
            tracker.track('firstQuartile');
            player.trigger('vpaid.AdVideoFirstQuartile');
          });

          adUnit.subscribe('AdVideoMidpoint', () => {
            tracker.track('midpoint');
            player.trigger('vpaid.AdVideoMidpoint');
          });

          adUnit.subscribe('AdVideoThirdQuartile', () => {
            tracker.track('thirdQuartile');
            player.trigger('vpaid.AdVideoThirdQuartile');
          });

          adUnit.subscribe('AdVideoComplete', () => {
            tracker.track('complete');
            player.trigger('vpaid.AdVideoComplete');
          });

          adUnit.subscribe('AdUserAcceptInvitation', () => {
            tracker.acceptInvitation();
            player.trigger('vpaid.AdUserAcceptInvitation');
          });

          adUnit.subscribe('AdUserMinimize', () => {
            tracker.minimize();
            player.trigger('vpaid.AdUserMinimize');
          });

          adUnit.subscribe('AdUserClose', () => {
            tracker.close();
            player.trigger('vpaid.AdUserClose');
          });

          adUnit.subscribe('AdPaused', () => {
            tracker.setPaused(true);
            player.trigger('vpaid.AdPaused');
          });

          adUnit.subscribe('AdPlaying', () => {
            tracker.setPaused(false);
            player.trigger('vpaid.AdPlaying');
          });

          adUnit.getAdLinear(withTimeout((err, isLinear) => {
              if (this.#cancelled) {
                forceStopAd('Received cancel signal');
                return;
              }

              if (err) {
                forceStopAd(err);
              } else if (!isLinear) {
                // TODO: support overlay banner
                forceStopAd('Non-linear not supported')
              } else {
                startLinearAd();
              }
            },
            () => {
              forceStopAd('Unable to get mode of operation: linear or non-linear');
            }));

          const startLinearAd = () => {
            player.controlBar.hide();

            this.addMuteControl(adUnit);

            // A VPAID adunit may (incorrectly?) call AdStarted again for the first quartile event
            const onAdStartedOnce = once(onAdStarted);
            subscribeWithTimeout(adUnit, 'AdStarted', onAdStartedOnce, forceStopAd);
            adUnit.startAd();
          }
        }

        const onAdStarted = () => {
          if (!this.#cancelled) {
            this.#started = true
            tracker.track('start');
            player.on('playerresize', resizeAd);
            player.trigger('ads-ad-started'); // notify videojs-contrib-ads
            player.trigger({
              type: 'vast.adStart',
              vast: createVASTContext(tracker)
            });
          } else {
            forceStopAd('Received cancel signal');
          }
        }

        const resizeAd = () => {
          adUnit.resizeAd(player.currentWidth(), player.currentHeight(), player.isFullscreen() ? 'fullscreen' : 'normal');
        }

        // not async so no timeout is required
        adUnit.handshakeVersion('2.0', onHandShake);
      }

      const creative = tracker.creative;

      const vpaidMediaFile = creative.mediaFiles.find(mediaFile => mediaFile.apiFramework === 'VPAID' && validMime(mediaFile));

      if (!vpaidMediaFile) {
        throw new Error('Invalid VPAID media file: only JavaScript is supported');
      }

      container = createVPAIDContainer(options);

      player.el().insertBefore(container, player.controlBar.el());

      const videoElement = determineVideoElement(player, options);

      const vpaidClient = new VPAIDHTML5Client(container, videoElement, {});

      vpaidClient.loadAdUnit(vpaidMediaFile.fileURL, adUnitLoad);
    });
  }

  removeMuteControl() {
    this.#controlBar?.remove();
    this.#controlBar = null;
  }

  addMuteControl(adUnit) {
    const controlBarDiv = document.createElement('div');
    controlBarDiv.className = 'vpaid-control-bar';

    this.#controlBar = controlBarDiv;

    const toggleMuteButton = document.createElement('button');
    toggleMuteButton.type = 'button';
    toggleMuteButton.className = 'vpaid-toggle-mute-button';

    const toggleMuteSpan = document.createElement('span');
    toggleMuteSpan.className = 'vpaid-icon-placeholder';

    toggleMuteButton.addEventListener('click', () => {
      this.#muted = !this.#muted;

      const newVolume = this.#muted ? 0 : (this.#volume || 1);

      adUnit.setAdVolume(newVolume, (/*error, callback*/)=>{});

      // NOTE: the mute icon button will be updated via the AdVolumeChange event (triggered by the adUnit).
    });

    toggleMuteButton.appendChild(toggleMuteSpan);
    controlBarDiv.appendChild(toggleMuteButton);

    const player = this.#player;

    player.el().insertBefore(controlBarDiv, player.controlBar.el());

    adUnit.getAdVolume((error, currentVolume) => {
      if (error) return;
      this.setVolume(currentVolume);
    });
  }

// TODO: review. may not need.
  cancel() {
    this.#cancelled = true;
    if (this.#started) {
      this.#eventTarget.trigger('forceStopAd');
    }
  }

  setVolume(v) {
    this.#volume = v;
    this.#muted = v === 0;
    this.updateControlBar();
  }

  updateControlBar() {
    if (this.#controlBar != null) {
      let className = this.#controlBar.className;
      className = className.replaceAll('mute', '').trim();
      className += this.#muted ? ' mute' : '';
      this.#controlBar.className = className;
    }
  }
}

function determineVideoElement(player, options) {
  const videoInstance = options.vpaid.videoInstance;

  let videoElement;

  if (videoInstance === 'none') {
    videoElement = null;
  } else {
    if (videoInstance !== 'same') {
      console.log(`${videoInstance} is an invalid videoInstance value. Defaulting to \'same\'.`);
    }
    // Same as: player.el().querySelector('.vjs-tech');
    videoElement = player.tech({kindaKnowWhatImDoing: true}).el();
    if (videoElement == null) {
      console.log(`Unable to find the video element for VPAID.`);
    }
  }
  return videoElement;
}

function validMime(mediaFile) {
    return VALID_TYPES.indexOf(mediaFile.mimeType.trim()) > -1;
}

function createVPAIDContainer(options) {
    const containerClass = options.vpaid.containerClass;

    const vpaidContainerElement = document.createElement('div');

    if (containerClass) {
      vpaidContainerElement.classList.add(containerClass);
    }

    return vpaidContainerElement;
}

/**
 *
 * @param {function} handler
 * @param {function()|null} timeoutFn
 * @return {function(): void}
 */

function withTimeout(handler, timeoutFn = null) {
  // TODO: configurable timeout
  const id = setTimeout(() => {
    handler = () => {
    };
    if (timeoutFn) {
      timeoutFn();
    }
  }, 10000);

  return function () {
    clearTimeout(id);
    handler.apply(null, arguments);
  };
}

/**
 * @param {object} adUnit
 * @param {string} evtName
 * @param {function} handler
 * @param {function(Error)} timeoutFn
 */
function subscribeWithTimeout(adUnit, evtName, handler, timeoutFn) {
  const fn = withTimeout(handler, () => {
    if (timeoutFn) {
      timeoutFn(new Error(`Timeout while waiting for ${evtName} event.`));
    }
  });

  adUnit.subscribe(evtName, fn);
}
