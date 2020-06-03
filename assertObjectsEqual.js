/* eslint-disable global-require */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names, no-console, eol-last, no-restricted-syntax, guard-for-in */
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
// takes 2 objects as params and return true or fals based on perfect match
const eqObjects = function (obj1, obj2) {
  let biggerObj = {};
  let smallerObj = {};
  if (Object.keys(obj1).length > Object.keys(obj2).length) {
    biggerObj = { ...obj1 };
    smallerObj = { ...obj2 };
  } else {
    biggerObj = { ...obj2 };
    smallerObj = { ...obj1 };
  }
  for (const key in biggerObj) {
    if (Array.isArray(smallerObj[key])) {
      const result = eqArrays(smallerObj[key], biggerObj[key]);
      return result;
    }
    if (!smallerObj[key] || smallerObj[key] !== biggerObj[key]) {
      return false;
    }
  }
  return true;
};
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
// Tests
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(ab, ba);