import videojs from 'video.js';
import 'videojs-contrib-ads';
import '../../src/vast-plugin.mjs';

window.videojs = videojs;
describe('Vast Plugin', () => {
  it('test jsdom', () => {
    const player = videojs('vid');

    // language=XML
    var xml = '<VAST version="2.0"><Ad id="Ad"><Wrapper><AdSystem>AdSystem</AdSystem><VASTAdTagURI><![CDATA[http://localhost:9999/vast.xml]]></VASTAdTagURI></Wrapper></Ad>\n</VAST>';

    var companion = {
      elementId: "companion",
      maxWidth: 300,
      maxHeight: 250
    };

    player.vast({
      xml: xml,
      //url: 'http://localhost:9999/vast.xml',
      skip: 3,
      companion: companion})
  });
})

