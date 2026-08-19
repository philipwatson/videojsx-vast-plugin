const configs = require('./webpack.base.js');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const packageJson = require('./package.json');

const commonConfigs = configs.map(c => merge(c, {
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(packageJson.version),
    })
  ]
}));
module.exports = commonConfigs;
