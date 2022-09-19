import window from "global";
import {companionFn, linearFn} from "./utils";
import {VASTClient, VASTParser, VASTTracker} from '@dailymotion/vast-client';
import {TrackedAd} from "./tracked-ad";

export class AdLoader {
  #vastClient
  #vastParser
  #options
  #adSelector;

  /**
   *
   * @param {VASTClient} vastClient
   * @param {VASTParser} vastParser
   * @param {AdSelector} adSelector
   * @param {object} options
   */
  constructor(vastClient, vastParser, adSelector, options) {
    this.#vastClient = vastClient;
    this.#vastParser = vastParser;
    this.#adSelector = adSelector;
    this.#options = options;
  }

  loadAds() {
    return new Promise((accept, reject) => {
      const {url, xml} = this.#options;

      if (!url && !xml) {
        throw new Error('xml or url option must be set');
      }

      const ads = url ? this.loadAdsWithUrl(url) : this.loadAdsWithXml(xml);
      ads.then(accept).catch(reject);
    });
  }

  /**
   *
   * @param {XMLDocument|string} xml
   */
  loadAdsWithXml(xml) {
    return new Promise((accept, reject) => {
      let xmlDocument;

      if (xml.constructor === window.XMLDocument) {
        xmlDocument = xml;
      } else if (xml.constructor === String) {
        xmlDocument = (new window.DOMParser()).parseFromString(xml, 'text/xml');
      } else {
        throw new Error('xml config option must be a String or XMLDocument');
      }

      this.#vastParser
        .parseVAST(xmlDocument)
        .then(this.#adSelector.selectAds)
        .then(this.#createTrackedAds)
        .then(accept)
        .catch(reject);
    })
  }

  loadAdsWithUrl(url) {
    return new Promise((accept, reject) => {
      this.#vastClient
        .get(url, {
          withCredentials: this.#options.withCredentials,
          wrapperLimit: this.#options.wrapperLimit
        })
        .then(this.#adSelector.selectAds)
        .then(this.#createTrackedAds)
        .then(accept)
        .catch(reject);
    })
  }

  /*** private methods ***/

  #createTrackedAds = ads => {
    const createTrackedAd = ad => {
      const linearAdTracker =
        new VASTTracker(this.#vastClient, ad, ad.creatives.find(linearFn), ad.creatives.find(companionFn));

      linearAdTracker.on('clickthrough', onClickThrough);

      let companionAdTracker = null;

      const companionCreative = ad.creatives.find(companionFn);

      if (companionCreative) {
        // Just pick the first suitable companion ad for now
        const options = this.#options;
        const variation = companionCreative.variations
          .filter(v => v.staticResource)
          .filter(v => v.type.indexOf('image') === 0)
          .find(v => parseInt(v.width, 10) <= options.companion.maxWidth && parseInt(v.height, 10) <= options.companion.maxHeight);

        if (variation) {
          companionAdTracker = new VASTTracker(this.#vastClient, ad, companionCreative, variation);
          companionAdTracker.on('clickthrough', onClickThrough);
        }
      }

      return new TrackedAd(linearAdTracker, companionAdTracker);
    }

    return ads.map(createTrackedAd);
  }
}

function onClickThrough(url) {
  window.open(url, '_blank');
}
