var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require("path");
var rootPath = path.resolve(__dirname, "..", "..", "..")

module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/app/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
    alias: {
      app: path.resolve(rootPath, 'src', 'app')
    }
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: path.resolve(rootPath, 'src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: path.resolve(rootPath, 'src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
