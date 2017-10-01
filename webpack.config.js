const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/CanvasDomLine.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'CanvasDomLine.js',
    library: 'CanvasDomLine',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};
