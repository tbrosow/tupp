'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',

    entry: [
        './src/app.js'
    ],
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.styl(us)?$/,
                use: [ 'vue-style-loader', 'css-loader', 'stylus-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}