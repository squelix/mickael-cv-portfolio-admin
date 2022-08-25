'use strict';

/* eslint-disable no-unused-vars */
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = (config) => {
  config.plugins.push(new MonacoWebpackPlugin());
  return config;
};
