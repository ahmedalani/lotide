/* eslint-disable func-names, no-restricted-syntax, no-console, eol-last */
// takes array and callback function, it keeps collecting items from a provided array until
// the callback provided returns a truthy value, then returns an array of the collected items
const takeUntil = function (arr, cb) {
  const output = [];
  for (let item of arr) {
    if (cb(item)) {
      return output;
    }
    output.push(item);
  }
  return output;
};
// takes two arrays an check if they equate
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
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
// Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);