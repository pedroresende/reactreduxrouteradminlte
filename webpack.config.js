var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/app');
var STYLE_DIR = path.resolve(__dirname, 'src/app/assets/less');
var STYLE_DIR_CSS = path.resolve(__dirname, 'src/app/assets/css');
var IMG_DIR = path.resolve(__dirname, 'src/app/assets/img');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: require.resolve("jquery"),
            loader: "imports?jQuery=jquery"
        }, {
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loaders: ['style', 'css']
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        }, {
            test: /\.less$/,
            loaders: ['style', 'css', 'less']
        }, {
            test: /\.woff$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
        }, {
            test: /\.woff2$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
        }, {
            test: /\.(svg|gif|png)$/,
            loader: "file-loader?name=./img/[hash].[ext]"
        }, {
            test: /\.(eot|ttf)$/,
            loader: "file-loader?name=./fonts/[hash].[ext]"
        }]
    },
    plugins: {

    }
};

module.exports = config;
