/* eslint-disable func-names, no-console, eol-last, no-restricted-syntax, guard-for-in, prefer-destructuring, global-require */
const eqObjects = require('./eqObjects');

// takes 2 objects and check if they match
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅ assertion passed! This obj: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴 assertion failed! This obj: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  return result;
};
module.exports = assertObjectsEqual;