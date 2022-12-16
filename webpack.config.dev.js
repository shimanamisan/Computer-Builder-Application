const { merge } = require('webpack-merge');
const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  // INFO: https://webpack.js.org/configuration/devtool/#devtool
  // ソースマップの品質を指定する
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    port: 9000,
    static: {
      directory: dist,
    },
  },
});
