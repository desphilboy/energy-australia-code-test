var path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: "development",
    entry: [
        'babel-polyfill',
        path.join(__dirname, './src/index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        historyApiFallback: true,
        port: 3030,

    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3030,
            server: {
                baseDir: ['dist']
            }
        })
    ]
};