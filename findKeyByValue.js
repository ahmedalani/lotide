/* eslint-disable func-names, no-console, eol-last, no-restricted-syntax */
// const assertEqual = require('./assertEqual');

// takes an obj and a value as params, returns the first key that contain the matching value
const findKeyByValue = function (obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;

// Tests
// const bestTVShowsByGenre = {
//   sci_fi: 'The Expanse',
//   comedy: 'Brooklyn Nine-Nine',
//   drama: 'The Wire'
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'That \'70s Show'), undefined);