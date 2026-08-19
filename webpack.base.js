const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const playerScript = {
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
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
        ],
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.mjs'],
    },
};

const pluginScript = Object.assign({}, playerScript, {
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

const cjsRequirePlugin = {
    entry: {
        'videojsx.vast': ["./src/vast-plugin.mjs"]
    },
    externals: {
        'video.js': 'video.js'
    },
    externalsType: "commonjs",
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].cjs.js',
        library: {
            type: 'commonjs'
        }
    }
};

const esImportPlugin = {
    experiments: {
        outputModule: true,
    },
    externals: {
        'video.js': 'video.js'
    },
    entry: {
        'videojsx.vast': ["./src/vast-plugin.mjs"]
    },
    externalsType: "module",
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].es.js',
        library: {
            type: 'module'
        }
    }
};

module.exports = [playerScript, pluginScript, cjsRequirePlugin, esImportPlugin];
