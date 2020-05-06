/* eslint-disable no-console, func-names, eol-last */
// tail function takes an array and returns the array without the first element
const tail = function (someArray) {
  return someArray.slice(1, someArray.length);
};
// assert function takes two paramiters and check if they match (test function)
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('✅');
    return;
  }
  console.log(`❗️This ${actual}does not match ${expected}, there\'s an error`);
};
// Tests
assertEqual(tail([1, 2, 3, 4]).length, 3);
assertEqual(tail([1]).length, 0);