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
// takes one array as parameter and return the middle element (one if odd, two if even)
const middle = function (arr) {
  const output = [];
  const arrLength = arr.length;
  // too short
  if (arrLength < 3) {
    return output;
  }
  // even
  if (!(arrLength % 2)) {
    const midOne = arrLength / 2;
    const midTwo = midOne - 1;
    output.push(arr[midTwo], arr[midOne]);
  }
  // odd
  if (arrLength % 2) {
    const mid = Math.floor(arrLength / 2);
    output.push(arr[mid]);
  }
  return output;
};
// tests
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(middle(['j']), []), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle(['j', 'c', 'j']), ['c']), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);

