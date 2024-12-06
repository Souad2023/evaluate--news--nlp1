const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/server/index.js', 
    mode: 'development', 
    devtool: 'source-map', 
    stats: 'verbose', 
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader", 
            },
        ],
    },    resolve: {
        fallback: {
        "assert": require.resolve("assert/"),
        "vm": require.resolve("vm-browserify"),
        "async_hooks": require.resolve("async_hooks"),
        "path": require.resolve("path-browserify"),
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html", 
            filename: "./index.html", 
        }),
        new CleanWebpackPlugin({
            dry: true, 
            verbose: true, 
            cleanStaleWebpackAssets: true, 
            protectWebpackAssets: false, 
        }),
    ],
};
