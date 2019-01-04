const portfinder = require('portfinder');
const express = require('express');
const mustacheExpress = require('mustache-express');
const cors = require('cors');
const path = require("path");

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
    res.type('xml').render('sample01', { port: availablePort })
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

    // page.on('request', (req) => {
    //   console.log(req.url());
    // });

    await page.goto(`http://localhost:${pubPort}/index.html`);

    jest.setTimeout(10000);
  });


  afterAll(() => {
    adserver.close();
    pubserver.close();
  });


  it('should play preroll', async () => {

    await page.waitForSelector('video');

    await page.waitForSelector('div.vjs-poster');

    await page.click('video');

    await page.waitForSelector('video[src*="video-960x540-5s"]');

    expect(await page.$eval('video', el => el.getAttribute("src"))).toMatch("video-960x540-5s");
  });

});
