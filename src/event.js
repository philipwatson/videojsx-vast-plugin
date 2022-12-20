/**
 *
 * @param {VASTTracker} vastTracker
 * @return {object|undefined}
 */
export function createVASTContext(vastTracker) {
  if (vastTracker) {
    const ad = vastTracker.ad;
    const creative = vastTracker.creative;
    return {
      mediaFiles: creative.mediaFiles.map(mediaFile => Object.assign({}, mediaFile)),
      adSequenceId: ad.sequence,
      adId: ad.id,
      creativeAdId: creative.id
    }
  }
}
