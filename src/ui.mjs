import window from 'global';
import videojs from 'video.js'

export class UI extends videojs.EventTarget {
  constructor(player, options) {
    super();
    this.player = player;
    this.options = options;
    // duration in seconds. useful for streaming ads where `player.duration()` will always give 0.
    this.duration = 0;
    this.skipDelay = 0;

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

    const setupRemainingTime = () => {
      if (!options.displayRemainingTime) return;

      const remainingTimeElement = this.remainingTimeElement = window.document.createElement('div');
      remainingTimeElement.className = 'vast-remaining-time';
      remainingTimeElement.style.display = 'none';

      player.el().appendChild(remainingTimeElement);
    }

    const setupRemainingTimeIcon = (type) => {
      if (!options.displayRemainingTimeIcons) return;

      const config = {
        play: {
          className: 'vjs-icon-play vast-remaining-time-icon-play',
          action: (player) => player.paused() ? player.play() : player.pause(),
          toggleClasses: ['vjs-icon-pause', 'vjs-icon-play'],
          events: ['adplay', 'adpause'],
          initialState: (player) => player.paused() ? 'vjs-icon-play' : 'vjs-icon-pause'
        },
        mute: {
          className: 'vast-remaining-time-icon-mute',
          action: (player) => player.muted(!player.muted()),
          toggleClasses: ['vjs-icon-volume-high', 'vjs-icon-volume-mute'],
          events: ['advolumechange'],
          initialState: (player) => player.muted() ? 'vjs-icon-volume-mute' : 'vjs-icon-volume-high'
        }
      };

      const { className, action, toggleClasses, events, initialState } = config[type];

      const button = player.addChild('button', {
        className: `vjs-hidden vjs-visible-text vjs-button vast-remaining-time-icon ${className}`,
        clickHandler: function() {
          action(this.player);
        }.bind(this),
      });

      button.removeClass('vjs-control');
      button.addClass(initialState(player));

      const toggleIcon = () => {
        toggleClasses.forEach(cls => button.toggleClass(cls));
      };

      this[`remainingTime${type.charAt(0).toUpperCase() + type.slice(1)}Element`] = button.el();

      events.forEach(event => player.on(event, toggleIcon));
    };

    setupProgressControl();
    setupBlocker();
    setupSkipButton();
    setupRemainingTime();
    setupRemainingTimeIcon('play');
    setupRemainingTimeIcon('mute');
  }

  tearDown() {
    const player = this.player;
    const originalState = this.originalState;

    this.duration = 0;
    this.skipDelay = 0;

    player.controls(originalState.controlsEnabled);

    if (originalState.seekEnabled) {
      player.controlBar.progressControl.enable();
    } else {
      player.controlBar.progressControl.disable();
    }

    this.blocker.parentElement.removeChild(this.blocker);
    this.skipButtonElement.parentElement.removeChild(this.skipButtonElement);

    if (this.options.displayRemainingTime) {
      this.remainingTimeElement.parentElement.removeChild(this.remainingTimeElement);
    }

    if (this.options.displayRemainingTimeIcons) {
      this.remainingTimePlayElement.parentElement.removeChild(this.remainingTimePlayElement);
      this.remainingTimeMuteElement.parentElement.removeChild(this.remainingTimeMuteElement);
    }

    player.off('adtimeupdate', this.#onTimeUpdate);
    player.off('adplay', this.#onAdPlay);
  }

  #onAdPlay = () => {
    const skipDelay = this.skipDelay;
    const player = this.player;
    if (skipDelay > 0 && (player.duration() || this.duration) >= skipDelay) {
      this.skipButtonElement.style.display = 'block';

      if (this.options.displayRemainingTime) {
        this.remainingTimeElement.style.display = 'block';
      }

      if (this.options.displayRemainingTimeIcons) {
        this.remainingTimePlayElement.classList.remove('vjs-hidden');
        this.remainingTimeMuteElement.classList.remove('vjs-hidden');
      }

      player.on('adtimeupdate', this.#onTimeUpdate);
    }
    player.loadingSpinner.el().style.display = 'none';
  }

  #onTimeUpdate = () => {
    this.player.loadingSpinner.el().style.display = 'none';

    const timeLeft = Math.ceil(this.skipDelay - this.player.currentTime());

    if (this.options.displayRemainingTime) {
      const remainingTimeLeft = Math.ceil(this.player.remainingTime());
      this.remainingTimeElement.innerHTML = this.options.messages.remainingTime.replace('{seconds}', remainingTimeLeft);
    }

    if (timeLeft > 0) {
      disableSkip(this.skipButtonElement);
      this.skipButtonElement.innerHTML = this.options.messages.skipCountdown.replace('{seconds}', timeLeft);
    } else {
      enableSkip(this.skipButtonElement);
      this.skipButtonElement.innerHTML = this.options.messages.skip;
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
