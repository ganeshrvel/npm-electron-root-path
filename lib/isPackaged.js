'use strict';

const IS_PROD = require('./env').IS_PROD;

module.exports.isPackaged =
  process.mainModule.filename.indexOf('app.asar') !== -1;
