const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        contentBase: './src/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: [
                    'ng-annotate-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.(css)$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextWebpackPlugin('styles/styles.css'),
        new OptimizeCssAssetsWebpackPlugin()
    ]
}
