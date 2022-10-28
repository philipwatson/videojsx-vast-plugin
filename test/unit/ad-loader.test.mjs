import {AdLoader} from '../../src/ad-loader.mjs';
import {VASTClient, VASTParser} from '@dailymotion/vast-client';
import {AdSelector} from "../../src/ad-selector.mjs";
import {jest} from '@jest/globals';
import window from 'global';

describe('Ad Loader', () => {
  const options = Object.freeze({
    withCredentials: true,
    wrapperLimit: 2
  });

  /**
   * @type {VASTClient}
   */
  let vastClient = null;
  /**
   * @type {AdSelector}
   */
  let adSelector = null;
  let vastParser = null;
  /**
   * @type {AdLoader}
   */
  let adLoader = null;

  /**
   * @type MockedFn
   */
  let vastClientGet = null;

  /**
   * @type MockedFn
   */
  let vastParserParse = null;

  beforeEach(() => {
    vastClient = new VASTClient();
    adSelector = new AdSelector();
    vastParser = new VASTParser();
    adLoader = new AdLoader(vastClient, vastParser, adSelector, options);

    vastParserParse = jest
      .spyOn(vastParser, 'parse');

    vastClientGet = jest
      .spyOn(vastClient, 'get');
  });

  describe('Error handling', () => {
    const PARAM_NOT_SET_MSG = "xml or url must be set";

    it('should error when given no params', () => {
      return expect(adLoader.loadAds()).rejects.toThrow(PARAM_NOT_SET_MSG);
    });

    it('should error when given the wrong params', () => {
      return expect(adLoader.loadAds({location:"xyz"})).rejects.toThrow(PARAM_NOT_SET_MSG);
    });

    it('should error when given invalid VAST XML', async () => {
      const PARSER_ERROR_MSG = 'bad vast';
      const INVALID_PARAM_MSG = 'xml config option must be a String or XMLDocument';

      vastParserParse.mockRejectedValue(new Error(PARSER_ERROR_MSG));

      await expect(adLoader.loadAds({xml: ""})).rejects.toThrow(PARSER_ERROR_MSG);
      await expect(adLoader.loadAds({xml: " "})).rejects.toThrow(PARSER_ERROR_MSG);
      await expect(adLoader.loadAds({xml: "<foo></foo>"})).rejects.toThrow(PARSER_ERROR_MSG);
      await expect(adLoader.loadAds({xml: document.implementation.createDocument(null, "thing")})).rejects.toThrow(PARSER_ERROR_MSG);

      await expect(adLoader.loadAds({xml: 1})).rejects.toThrow(INVALID_PARAM_MSG);
      await expect(adLoader.loadAds({xml: {}})).rejects.toThrow(INVALID_PARAM_MSG);
    });

    it('should return no ads when vast client errors',  ()=> {
      vastClientGet.mockRejectedValue(new Error('vast client error'));
      return expect(adLoader.loadAds({url: 'xyz'})).resolves.toStrictEqual([]);
    });
  });

  describe('Waterfall', () => {

    //@language=XML
    const SIMPLE_VAST = `
<VAST version="3.0">
    <Ad id="102">
        <InLine>
            <AdSystem version="4.0">ad system</AdSystem>
            <AdTitle>video ad</AdTitle>
            <Error>http://example.com/error</Error>
            <Impression id="imp-1">http://example.com/track/impression</Impression>
            <Creatives>
                <Creative id="181" sequence="1">
                    <Linear>
                        <Duration>00:00:20</Duration>
                        <MediaFiles>
                            <MediaFile id="828" delivery="progressive" type="video/mp4" bitrate="500" width="400" height="300" minBitrate="360" maxBitrate="1080" scalable="1" maintainAspectRatio="1" codec="0">
                                <![CDATA[https://example.com/content/video.mp4]]>
                            </MediaFile>
                        </MediaFiles>
                    </Linear>
                </Creative>
            </Creatives>
        </InLine>
    </Ad>
</VAST>
`;

    it('should use the first valid response', async () => {
      const responseQueue = [
        () => Promise.reject(),
        () => Promise.reject(),
        // TODO: add empty VAST
        () => parseVast(SIMPLE_VAST),
        () => Promise.reject()
      ];

      vastClientGet.mockImplementation(() => {
        return responseQueue.shift()();
      });

      await adLoader.loadAds({
        url: ['http://example.com/apple', 'http://example.com/banana', 'http://example.com/carrot', 'http://example.com/dates']
      });

      const clientCalls = vastClientGet.mock.calls;
      expect(clientCalls).toHaveLength(3);
      expect(clientCalls[0]).toStrictEqual(['http://example.com/apple', options]);
      expect(clientCalls[1]).toStrictEqual(['http://example.com/banana', options]);
      expect(clientCalls[2]).toStrictEqual(['http://example.com/carrot', options]);
    });

    function parseVast(xml) {
      let parser = new VASTParser();
      const xmlDocument = (new window.DOMParser()).parseFromString(xml, 'application/xml');
      return parser.parseVAST(xmlDocument);
    }
  });
});

