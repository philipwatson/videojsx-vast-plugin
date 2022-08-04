const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('node:path');


const devServerOptions = {
  devServer: {
    open: 'index.html',
    port: 9999,
    // host: '127.0.0.1',
    static: [
      {
        directory: path.resolve(__dirname, "dev")
      },
      {
        directory: path.resolve(__dirname, "test/creative")
      }
    ],
    devMiddleware: {
      publicPath: "/bundle/",
    }
  }
};

// From https://webpack.js.org/configuration/dev-server/
// "Be aware that when exporting multiple configurations only the devServer options for the first configuration will be
// taken into account and used for all the configurations in the array."
common[0] = merge(common[0], devServerOptions);

module.exports = common.map(c => merge(c, {
  mode: 'development',
  devtool: 'inline-source-map',
}));
