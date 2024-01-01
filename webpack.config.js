const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/input.js',
  output: {
    path: path.resolve(__dirname, './src/js'),
    filename: 'output.js',
  },
};