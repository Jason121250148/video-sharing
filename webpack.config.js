const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: path.resolve('./src/client'),
    entry: {
        vender: ['babel-polyfill', 'jquery', 'react'],
        'project-app': ['./project/app/ProjectApp.jsx', './project/res/index.less']
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve('./dist/assets'),
        publicPath: '/',
        filename: './js/[name].min.js'
    },
    devServer: {
        contentBase: path.resolve('./dist/assets')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/[name].min.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: './js/vendor.min.js',
            minChunks: Infinity
        })
    ]
};
