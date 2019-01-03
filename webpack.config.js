var path = require('path');
var SRC_DIR = path.join(__dirname, './react-client/src/index.jsx');
var DIST_DIR = path.join(__dirname, './react-client/public');

module.exports = {
  entry: SRC_DIR,
  mode: 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, 
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
};
