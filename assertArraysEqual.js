/* eslint-disable func-names, no-console, eol-last */
// takes two arrays an check if they equate
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (element !== arr2[i]) {
      return false;
    }
  }
  return true;
};
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