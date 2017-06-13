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
                test   : /\.(ttf|eot|svg|woff(2)|woff|png|jpg|gif?)(\?[a-z0-9=&.]+)?$/,
                //use: [{loader : 'file-loader'}, {loader: 'url-loader?limit=30000'}]
                loader: 'url-loader?limit=100000'
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
                test: /\.yaml$/,
                use: [
                    {loader: 'json-loader'},
                    {loader: 'yaml-loader'},
                ]
            },
            {
                test: /(\.css$)|(\.scss$)/,
                include: /node-modules/,
                use: ['style-loader', 'css-loader']
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