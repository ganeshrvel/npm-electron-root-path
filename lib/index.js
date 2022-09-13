'use strict';

const path = require('path');
const electronEnv = require('./electronEnv');
const IS_PROD = require('./env').IS_PROD;
const isPackaged = require('electron-is-packaged').isPackaged;

function stripTrailingSlashes(string) {
  return string.replace(/\/+$/, '');
}

function doesStringEndsWith(str, target) {
  if (target.length < 1) {
    return str.length < 1;
  }

  const last = str.substring(str.length - target.length);

  return last === target;
}

let rootPath = null;

if (isPackaged) {
  const packagedNodeModulesPath = '/node_modules/electron-root-path/lib';

  let dirname = __dirname;
  if (!doesStringEndsWith(dirname, packagedNodeModulesPath)) {
    dirname = path.join(__dirname, packagedNodeModulesPath);
  }

  // renderer and main process - packaged build
  if (electronEnv.isWindows) {
    // windows platform
    rootPath = path.join(dirname, '..', '../../../../');
  } else {
    // non windows platform
    rootPath = path.join(dirname, '..', '../../../../../');
  }
} else if (IS_PROD) {
  // renderer and main process - prod build
  if (electronEnv.isRenderer) {
    // renderer process - prod build
    rootPath = path.join(__dirname, '..', '..', '..');
  } else if (!module.parent) {
    // main process - prod build (case: run "start")
    rootPath = path.join(__dirname, '..', '..', '..');
  } else {
    // main process - prod (case: run "build")
    rootPath = path.join(__dirname, '..', '..', '..');
  }
} else if (electronEnv.isRenderer) {
  // renderer process - dev build
  rootPath = path.join(__dirname, '..', '..', '..');
} else {
  // main process - dev build
  rootPath = path.join(__dirname, '..', '..', '..');
}

module.exports.rootPath = path.resolve(rootPath);
