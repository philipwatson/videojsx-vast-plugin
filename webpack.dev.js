const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = common.map(c => merge(c, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: ['./dist', './dev', './test/creative'],
    openPage: 'index.html',
    open: true,
    port: 9999
  }
}));
