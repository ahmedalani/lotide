/* eslint-disable func-names, no-console, eol-last, no-restricted-syntax */

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