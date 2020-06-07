/* eslint-disable func-names, no-console, eol-last */
const eqArrays = require('./eqArrays');

// takes two arrays and compare if they match
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