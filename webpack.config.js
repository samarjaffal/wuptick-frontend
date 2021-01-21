const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

var stylePathResolves =
    'includePaths[]=' +
    path.resolve('./') +
    '&' +
    'includePaths[]=' +
    path.resolve('./node_modules');

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/assets/images/favicon.ico',
        }),
        new webpack.DefinePlugin(envKeys),
    ],

    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css' + '!sass?outputStyle=expanded&' + stylePathResolves
                ),
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },

            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    node: {
        fs: 'empty',
    },
    externals: {
        FileReader: 'FileReader',
    },
};
