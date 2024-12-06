const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './src/server/index.js',
    mode: 'production', 
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader", 
            }
        ]
    },
    resolve: {
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
        })
    ]
}
