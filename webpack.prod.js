const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isModuleBuild = (c) => c.output && /\.(cjs|es)\.js$/.test(c.output.filename);

module.exports = common.map(c => {
    if (isModuleBuild(c)) {
        return merge(c, {
            mode: 'production',
            devtool: 'source-map',
            optimization: { minimize: false },
        });
    }

    // Browser-direct builds: minified for direct <script> use.
    return merge(c, {
        mode: 'production',
        plugins: [
            new CompressionPlugin({
                test: /\.js/
            }),
        ],

        performance: {
            maxEntrypointSize: 850000,
            maxAssetSize: 850000
        },

        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                        compress: {
                            drop_console: true,
                        },
                    },
                    extractComments: false,
                }),
            ],
        },
    });
});
