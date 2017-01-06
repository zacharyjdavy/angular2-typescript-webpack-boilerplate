var path = require('path');
var rootPath = path.resolve(__dirname, '..', '..');

module.exports = {
  devtool: 'inline-source-map',

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
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: path.resolve(rootPath, 'src', 'app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: path.resolve(rootPath, 'src', 'app'),
        loader: 'raw'
      }
    ]
  }
}
