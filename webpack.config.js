const path =require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /(\.css$)|(\.scss$)/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                    { loader: 'sass-loader'}
                ]
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)|woff|png?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            },
            {
                test: /\.yaml$/,
                use: [
                    {loader: 'json-loader'},
                    {loader: 'yaml-loader'},
                ]
            }
        ]
    },
    devServer: {
        contentBase: './src',
        port: 10000,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};