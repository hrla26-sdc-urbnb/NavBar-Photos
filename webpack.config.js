var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');
var SRC_DIR = path.join(__dirname, './react-client/src');
var DIST_DIR = path.join(__dirname, './react-client/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: combineLoaders([{
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }])
        }
        )
      }
    ]
  }
};
