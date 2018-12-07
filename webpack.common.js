module.exports = {
    entry: {player: './src/vast-player.js'},

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
        extensions: ['.js'],
    },
};
