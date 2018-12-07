const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CompressionPlugin({
            test: /\.js/,
        }),
    ],

    performance: {
        maxEntrypointSize: 850000,
        maxAssetSize: 850000
    }

});
