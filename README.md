# npm: electron-root-path

- Author: [Ganesh Rathinavel](https://www.linkedin.com/in/ganeshrvel "Ganesh Rathinavel")
- License: [MIT](https://github.com/ganeshrvel/openmtp/blob/master/LICENSE "MIT")
- Website URL: [https://github.com/ganeshrvel/npm-electron-root-path](https://github.com/ganeshrvel/npm-electron-root-path/ "https://github.com/ganeshrvel/npm-electron-root-path")
- Repo URL: [https://github.com/ganeshrvel/npm-electron-root-path](https://github.com/ganeshrvel/npm-electron-root-path/ "https://github.com/ganeshrvel/npm-electron-root-path")
- Contacts: ganeshrvel@outlook.com


### Introduction

##### Get the root path of an Electron Application.

Finding the root path of an electron app can be tricky, this npm package solves this issue. Follow further instructions to implement the same inside your app.

Initially, I'd created **electron-root-path** package for [OpenMTP  - Advanced Android File Transfer Application for macOS](https://github.com/ganeshrvel/openmtp "OpenMTP  - Advanced Android File Transfer Application for macOS"). It works fine with [Electron React Redux Advanced Boilerplate](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate "Electron React Redux advanced boilerplate") and [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate "electron-react-boilerplate")

## Installation

```shell
$ npm install electron-root-path

or 

$ yarn add electron-root-path
```

## Usage

```javascript
// Import ES6 way
import { rootPath } from 'electron-root-path';

// Import ES5 way
const rootPath = require('electron-root-path').rootPath;

// e.g:
// read a file in the root
const location = path.join(rootPath, 'package.json');
const pkgInfo = fs.readFileSync(location, { encoding: 'utf8' });
```

- After packaging the app, the *rootPath* will point to the absolute directory path of <APP_PACKAGE_NAME>.app

```javascript
// eg: /Applications/AppName.app
```
- Handle the packaged condition if required using:

```javascript
const isProd = process.env.NODE_ENV === 'production';

// or

// npm install electron-is-packaged

const isPackaged = require('electron-is-packaged').isPackaged;
```


## Building from Source

Requirements: [Node.js v6+](https://nodejs.org/en/download/ "Install Node.js"), [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git "Install Git") and [npm](https://www.npmjs.com/get-npm "Install Node package manager")


### Clone
```shell
$ git clone --depth 1 --single-branch --branch master https://github.com/ganeshrvel/npm-electron-root-path.git

$ cd npm-electron-root-path
```

### Contribute
- Fork the repo and create your branch from master.
- Ensure that the changes pass linting.
- Update the documentation if needed.
- Make sure your code lints.
- Issue a pull request!

When you submit code changes, your submissions are understood to be under the same [MIT License](https://github.com/ganeshrvel/npm-electron-root-path/blob/master/LICENSE "MIT License") that covers the project. Feel free to contact the maintainers if that's a concern.


### Buy me a coffee
Help me keep the app FREE and open for all.
Paypal me: [paypal.me/ganeshrvel](https://paypal.me/ganeshrvel "paypal.me/ganeshrvel")

### Contacts
Please feel free to contact me at ganeshrvel@outlook.com

### More repos
- [Electron React Redux Advanced Boilerplate](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate "Electron React Redux Advanced Boilerplate")
- [OpenMTP  - Advanced Android File Transfer Application for macOS](https://github.com/ganeshrvel/openmtp "OpenMTP  - Advanced Android File Transfer Application for macOS")
- [Tutorial Series by Ganesh Rathinavel](https://github.com/ganeshrvel/tutorial-series-ganesh-rathinavel "Tutorial Series by Ganesh Rathinavel")

### License
electron-root-path | Get the root path of an Electron Application is released under [MIT License](https://github.com/ganeshrvel/npm-electron-root-path/blob/master/LICENSE "MIT License").

Copyright © 2018-Present Ganesh Rathinavel
