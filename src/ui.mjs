import window from 'global';
import videojs from 'video.js'

export class UI extends videojs.EventTarget {
  constructor(player, options) {
    super();
    this.player = player;
    this.options = options;
    // duration in seconds. useful for streaming ads where `player.duration()` will always give 0.
    this.duration = 0;

    /** @type {Object} */
    this.originalState = {
      controlsEnabled: player.controls(),
      seekEnabled: player.controlBar.progressControl.enabled()
    };
  }

  setUp() {
    const player = this.player;
    const options = this.options;

    const setupProgressControl = () => {
      player.controls(options.controlsEnabled);
      if (options.seekEnabled) {
        player.controlBar.progressControl.enable();
      } else {
        player.controlBar.progressControl.disable();
      }
    }

    const setupBlocker = () => {
      const blocker = this.blocker = window.document.createElement('div');
      blocker.className = 'vast-blocker';
      blocker.onclick = () => {
        if (player.paused()) {
          player.play();
          return false;
        }
        this.trigger('click');
      };
      player.el().insertBefore(blocker, player.controlBar.el());
    }

    const setupSkipButton = () => {
      const skipButtonElement = this.skipButtonElement = window.document.createElement('div');
      skipButtonElement.className = 'vast-skip-button';
      skipButtonElement.style.display = 'none';
      player.el().appendChild(skipButtonElement);

      player.one('adplay', this.#onAdPlay);

      skipButtonElement.onclick = (e) => {
        if ((' ' + skipButtonElement.className + ' ').indexOf(' enabled ') >= 0) {
          this.trigger('skip');
        }
        if (window.Event.prototype.stopPropagation !== undefined) {
          e.stopPropagation();
        } else {
          return false;
        }
      };
    }

    setupProgressControl();
    setupBlocker();
    setupSkipButton();
  }

  tearDown() {
    const player = this.player;
    const originalState = this.originalState;

    player.controls(originalState.controlsEnabled);

    if (originalState.seekEnabled) {
      player.controlBar.progressControl.enable();
    } else {
      player.controlBar.progressControl.disable();
    }

    this.blocker.parentElement.removeChild(this.blocker);
    this.skipButtonElement.parentElement.removeChild(this.skipButtonElement);

    player.off('adtimeupdate', this.#onTimeUpdate);
    player.off('adplay', this.#onAdPlay);
  }

  #onAdPlay = () => {
    const skip = this.options.skip;
    const player = this.player;
    if (skip > 0 && (player.duration() || this.duration) >= skip) {
      this.skipButtonElement.style.display = 'block';
      player.on('adtimeupdate', this.#onTimeUpdate);
    }
    player.loadingSpinner.el().style.display = 'none';
  }

  #onTimeUpdate = () => {
    this.player.loadingSpinner.el().style.display = 'none';

    const timeLeft = Math.ceil(this.options.skip - this.player.currentTime());

    if (timeLeft > 0) {
      disableSkip(this.skipButtonElement);
      this.skipButtonElement.innerHTML = 'Skip in ' + timeLeft + '...';
    } else {
      enableSkip(this.skipButtonElement);
      this.skipButtonElement.innerHTML = 'Skip';
    }
  }
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function isSkipEnabled(skipButtonElement) {
  return (' ' + skipButtonElement.className + ' ').indexOf(' enabled ') > -1;
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function disableSkip(skipButtonElement) {
  if (isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className =
      skipButtonElement.className.replace(' enabled ', '');
  }
}

/**
 *
 * @param {HTMLElement} skipButtonElement
 */
function enableSkip(skipButtonElement) {
  if (!isSkipEnabled(skipButtonElement)) {
    skipButtonElement.className += ' enabled ';
  }
}
