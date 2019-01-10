// import webpack from 'webpack';
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import LiveReloadPlugin from 'webpack-livereload-plugin'
// import CopyWebpackPlugin from 'copy-webpack-plugin'
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
mode: 'none',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.scss$/,
        use: [{
           loader: "style-loader"
        }, {
           loader: "css-loader", options: {
             sourceMap: true
           }
        }, {
           loader: "sass-loader", options: {
             sourceMap: true
           }
        }]
    },
    {
       test: /\.(jpg|png|gif|svg|pdf)$/,
       use: {
          loader: 'file-loader',
          options: {
             name:'[name].[ext]',
             outputPath: path.resolve(__dirname, 'dist/images'),
             publicPath: './public/images'

           }
       }
   }]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: './public/favicon.ico'
    }),
    new LiveReloadPlugin(),
    new CopyWebpackPlugin ([
      { from: path.resolve(__dirname, 'public/images'), to: 'images' }
    ])
  ]
};
