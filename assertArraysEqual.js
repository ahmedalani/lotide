/* eslint-disable func-names, no-console, eol-last */
const eqArrays = require('./eqArrays');

// not sure why the fuck I'm doing this, seems redundant
const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log('✅✅ assertion passed!');
  } else {
    console.log('🔴🔴 assertion failed!');
  }
  return result;
};

module.exports = assertArraysEqual;