const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: ['./dist', './dev', './test/creative'],
    openPage: 'index.html',
    open: true
  }
});
