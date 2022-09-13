'use strict';

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports.IS_DEV = IS_DEV;
module.exports.IS_PROD = !IS_DEV;
