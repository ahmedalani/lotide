/* eslint-disable func-names, no-console, eol-last, no-restricted-syntax, guard-for-in */
// takes 2 params and check if they match
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  }
  console.log(`This ${actual}❗️does not match ${expected}`);
};
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
// Tests
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
const z = { a: 1, b: '3' };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, z), false);
// tests with arrays
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

