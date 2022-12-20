export class TrackedAd {
  #linearAdTracker
  #companionTracker
  #skipAfterDuration
  /**
   *
   * @param {VASTTracker} linearAdTracker
   * @param {VASTTracker} companionTracker
   */
  constructor(linearAdTracker, companionTracker) {
    this.#linearAdTracker = linearAdTracker;
    this.#companionTracker = companionTracker;
    this.#skipAfterDuration = false;
  }

  get linearCreative() {
    return this.#linearAdTracker.creative;
  }

  get linearAdTracker() {
    return this.#linearAdTracker;
  }

  get companionTracker() {
    return this.#companionTracker;
  }

  /**
   *
   * @return {boolean}
   */
  get skipAfterDuration() {
    return this.#skipAfterDuration;
  }

  /**
   * @param {boolean} value
   */
  set skipAfterDuration(value) {
    this.#skipAfterDuration = value;
  }

  /**
   *
   * @return {boolean}
   */
  hasVideoMedia() {
    return this.linearCreative.mediaFiles.some(mediaFile => mediaFile && mediaFile.apiFramework == null);
  }
}
