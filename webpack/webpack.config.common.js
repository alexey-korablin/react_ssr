const path = require('path');
const webpack = require('webpack');

const isDewMod = process.env.NODE_ENV === 'development';

module.export = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },
}
;