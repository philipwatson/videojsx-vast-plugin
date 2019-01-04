const { setup: setupPuppeteer } = require('jest-environment-puppeteer');
const webpack = require('webpack');
const config = require('../../webpack.dev.js');

async function build() {
  const compiler = webpack(config);

  return new Promise(function(res, rej) {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        rej(Error('Error when compiling'));
      }
      else {
        res();
      }
    });
  });
}


module.exports = async function globalSetup() {
  await build();
  await setupPuppeteer();
};
