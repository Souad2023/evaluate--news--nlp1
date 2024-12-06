const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/server/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/views/index.html', 
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', 
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        open: true,
        hot: true,
    },
};
