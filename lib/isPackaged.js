'use strict';

const IS_PROD = require('./env').IS_PROD;

let isPackaged = false;

if (
  process.mainModule &&
  process.mainModule.filename.indexOf('app.asar') !== -1
) {
  isPackaged = true;
}

module.exports.isPackaged = isPackaged;
