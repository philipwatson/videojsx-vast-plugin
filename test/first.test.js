const portfinder = require('portfinder');
const express = require('express');
const mustacheExpress = require('mustache-express');
const cors = require('cors');
const path = require("path");

const GLOBALS = {
  mediaFile: "video-960x540-5s.webm"
};

async function setupPublisherServer(adserverPort) {
  const availablePort = await portfinder.getPortPromise();

  const app = express();

  // Register '.html' and '.css' extension
  app.engine('html', mustacheExpress());
  app.engine('css', mustacheExpress());

  //app.set('view engine', 'html');
  app.set('views',  path.resolve(".") + '/test/page');

  app.use(express.static('dist'));
  app.get("/*", (req, res) => {
    const name = req.path.split('/').pop();
    if (name.toLowerCase().endsWith("css")) {
      res.type('css');
    }
    else {
      res.type('html');
    }
    res.render(name, { port: adserverPort })
  });

  return new Promise((res) => {
    const publisherServer = app.listen(availablePort, () => {
      let port = publisherServer.address().port;
      console.log(`Publisher server listening on port ${port}!`);
      res(publisherServer);
    });
  });
}

async function setupAdvertServer() {
  const availablePort = await portfinder.getPortPromise();

  const app = express();

  app.use(cors({
    origin: (origin, callback) => {
      callback(null, true)
    },
    credentials: true
  }));


  // Register '.xml' extension
  app.engine('xml', mustacheExpress());

  app.set('view engine', 'xml');
  app.set('views',  path.resolve(".") + '/test/vast');

  app.get("/vast", (req, res) => {
    res.type('xml').render('sample01', { port: availablePort, mediaFile: GLOBALS.mediaFile })
  });

  app.get("/track/*", (req, res) => {
    res.send('');
  });

  app.use('/creative', express.static( path.resolve(".") + '/test/creative'));
  app.use('/page', express.static( path.resolve(".") + '/test/page'));

  return new Promise((res) => {
    const adServer = app.listen(availablePort, () => {
      let port = adServer.address().port;
      console.log(`Ad server listening on port ${port}!`);
      res(adServer);
    });
  });
}

describe('Video player', () => {
  let pubPort;
  let adPort;
  let pubserver;
  let adserver;

  beforeAll(async () => {
    adserver = await setupAdvertServer();
    adPort = adserver.address().port;

    pubserver = await setupPublisherServer(adPort);
    pubPort = pubserver.address().port;
    jest.setTimeout(10000);
  });

  afterAll(() => {
    adserver.close();
    pubserver.close();
  });

  beforeEach(async () => {
    GLOBALS.mediaFile = "video-960x540-5s.webm";
    await page.goto(`http://localhost:${pubPort}/index.html`);
  });

  it('should play preroll', async () => {
    await waitForVideo();

    await clickVideo();

    await page.waitForFunction('window.test.playedSources.length > 1');

    const result = await page.evaluate(() => window.test.playedSources);

    expect(result.length).toEqual(2);
    expect(result[0]).toMatch("video-960x540-5s");
    expect(result[1]).toMatch("big_buck_bunny_720p_surround");
  });

  it('should play content video when media file does not exist', async () => {
    GLOBALS.mediaFile = "no-such-file-exists";

    await waitForVideo();

    await clickVideo();

    await page.waitFor(() => window.test.playedSources.length > 0, {timeout: 3000});

    const result = await page.evaluate(() => window.test.playedSources);

    expect(result.length).toEqual(1);
    expect(result[0]).toMatch("big_buck_bunny_720p_surround");
  });

  async function waitForVideo() {
    await page.waitForSelector('video');
    await page.waitForSelector('div.vjs-poster');
  }

  async function clickVideo() {
    await page.click('video');
  }
});
