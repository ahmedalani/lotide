/* eslint-disable func-names, no-console, eol-last, no-restricted-syntax, guard-for-in, prefer-destructuring, global-require */
const eqObjects = require('./eqObjects');

// not sure why the fuck I'm doing this, seems redundant
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
// Tests
// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// assertObjectsEqual(ab, ba);