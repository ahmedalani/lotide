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
// takes 2 params and check if they match
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  }
  console.log(`This ${actual}❗️does not match ${expected}`);
};