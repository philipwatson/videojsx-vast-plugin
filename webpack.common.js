const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const videoPlayerConfig = {
    entry: {player: './src/vast-player.mjs'},

    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
        chunkFilename: "[name].bundle.js",
    },

    target: 'web',

    module: {
        rules: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.mjs'],
    },
};

const standalonePluginConfig = Object.assign({}, videoPlayerConfig, {
    entry: {
        'videojsx.vast': ['./src/vast-plugin.mjs', './src/vast-player.css']
    },
    externals: {
        'video.js': 'videojs'
    },
    module: {
        rules: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css?$/, exclude: /node_modules/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        ],
    },
    plugins: [
      new MiniCssExtractPlugin()
    ],

});

module.exports = [videoPlayerConfig, standalonePluginConfig];
