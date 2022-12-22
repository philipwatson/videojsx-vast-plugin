import VPAIDHTML5Client from 'vpaid-html5-client';
import window from 'global/window';
import document from 'global/document';
import {once} from './utils';
import {createVASTContext} from "./event";

const VALID_TYPES = ['application/x-javascript', 'text/javascript', 'application/javascript'];

export class VPAIDHandler {
  #forceStopDone
  #cancelled
  #started
  #player
  #options
  #eventTarget

  constructor(player, options) {
    this.#player = player;
    this.#options = options;
    this.#eventTarget = new videojs.EventTarget();
  }

  handle(tracker) {
    this.#cancelled = false;
    this.#started = false
    this.#forceStopDone = false;

    return new Promise((resolve, reject) => {
      const options = this.#options;
      const player = this.#player;
      /**
       *
       * @type {HTMLElement|null}
       */
      let container = null;
      let containerAttributes = {};
      let containerIsFixed = false;


      const onLoad = (err, adUnit) => {
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

        adUnit.subscribe('AdError', message => {
          // General VPAID Error = 901 (in VAST 3 spec)
          tracker.error({ERRORCODE: 901});
          this.#forceStopDone = true;
          cleanUp();
          reject(`Fatal VPAID Error: ${typeof message === 'object' ? JSON.stringify(message) : message}`);
          player.trigger({type: 'vpaid.AdError', error: message});
        });

        if (this.#cancelled) {
          forceStopAd('Received cancel signal from player');
          return;
        }

        const cleanUp = () => {
          player.controlBar.show();

          player.off('playerresize', resizeAd);

          if (options.vpaid.videoInstance === 'new' && videoElement.parentElement) {
            videoElement.parentElement.removeChild(videoElement);
          }

          vpaidClient.destroy();

          // Some VPAID creatives don't clean up after themselves
          if (container) {
            if (containerIsFixed) {
              container.innerHTML = '';

              const before = containerAttributes;
              const after = getAttributes(container);

              for (const [key, value] of Object.entries(after)) {
                if (before.hasOwnProperty(key)) {
                  if (before[key] !== value) {
                    // restore changed
                    container.setAttribute(key, before[key]);
                  }
                } else {
                  // removed added
                  container.removeAttribute(key);
                }
              }

              for (const [key, value] of Object.entries(before)) {
                if (!after.hasOwnProperty(key)) {
                  // restore removed
                  container.setAttribute(key, value);
                }
              }
            } else if (container.parentElement) {
              container.parentElement.removeChild(container);
            }
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
            AdParameters: creative.adParameters || ''
          };

          const videoInstance = options.vpaid.videoInstance;

          if (videoInstance === 'same') {
            videoElement = player.tech({kindaKnowWhatImDoing: true}).el();
          } else if (videoInstance === 'new') {
            videoElement = window.document.createElement('video');
            videoElement.style.cssText = 'position:absolute; top:0; left:0; z-index:2 !important;';
            container.appendChild(videoElement);
          } else {
            if (videoInstance !== 'none') {
              console.log(`${videoInstance} is an invalid videoInstance value. Defaulting to \'none\'.`);
            }
            videoElement = null;
          }

          const environmentVars = {
            slot: container,
            videoSlot: videoElement,
            // videoSlotCanAutoPlay: true
          };

          subscribeWithTimeout(adUnit, 'AdLoaded', onAdLoaded, forceStopAd);

          const viewMode = player.isFullscreen() ? 'fullscreen' : 'normal';

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
            const lastVolume = player.volume()
            adUnit.getAdVolume((error, currentVolume) => {
              if (error) return;

              if (currentVolume === 0 && lastVolume > 0) {
                tracker.setMuted(true);
              } else if (currentVolume > 0 && lastVolume === 0) {
                tracker.setMuted(false);
              }

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
            (url, id, playerHandles) => {
              if (playerHandles) {
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

        adUnit.handshakeVersion('2.0', withTimeout(onHandShake, () => {
          reject('Timeout while waiting for version handshake response');
        }));
      }

      const creative = tracker.creative;

      const vpaidMediaFile = creative.mediaFiles.find(mediaFile => mediaFile.apiFramework === 'VPAID' && validMime(mediaFile));

      if (!vpaidMediaFile) {
        throw new Error('Invalid VPAID media file: only JavaScript is supported');
      }

      const techScreen = player.el().querySelector('.vjs-tech');

      container = findHtmlContainer(options);
      if (!container) {
        // ideally we want to create a fresh container element (no state attributes (i.e. 'data-ad-processed') or
        // event listeners attached by previous ad)
        container = createHtmlContainer(options);
        containerIsFixed = false;
      } else {
        containerIsFixed = true;
      }

      containerAttributes = getAttributes(container);

      player.el().insertBefore(container, player.controlBar.el());

      const vpaidClient = new VPAIDHTML5Client(container, techScreen, {});

      vpaidClient.loadAdUnit(vpaidMediaFile.fileURL, onLoad);
    });
  }

  // TODO: review. may not need.
  cancel() {
    this.#cancelled = true;
    if (this.#started) {
      this.#eventTarget.trigger('forceStopAd');
    }
  }
}

function validMime(mediaFile) {
    return VALID_TYPES.indexOf(mediaFile.mimeType.trim()) > -1;
}

function createHtmlContainer(options) {
    const containerId = options.vpaid.containerId;
    const containerClass = options.vpaid.containerClass;

    const vpaidContainerElement = document.createElement('div');

    if (containerId) {
      vpaidContainerElement.setAttribute('id', containerId);
    }

    if (containerClass) {
      vpaidContainerElement.classList.add(containerClass);
    }

    return vpaidContainerElement;
}


function findHtmlContainer(options) {
  const containerId = options.vpaid.containerId;
  const containerClass = options.vpaid.containerClass;
  let vpaidContainerElement = document.getElementById(containerId);

  if (!vpaidContainerElement) {
    vpaidContainerElement = document.getElementsByClassName(containerClass)[0];
  }

  return vpaidContainerElement;
}

/**
 *
 * @param {HTMLElement} element
 * @return {{}}
 */
function getAttributes(element) {
  const obj = {}
  for (const attr of element.attributes) {
    obj[attr.name] = attr.value;
  }
  return obj;
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
