/* eslint-disable func-names, no-console, eol-last, dot-notation, no-restricted-syntax */
// takes 2 params and check if they match
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  }
  console.log(`This ${actual}❗️does not match ${expected}`);
};
// takes a string as parameter and return an obj with count of each letter
const countLetters = function (str) {
  const result = {};
  for (const letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};
// Tests
const test = countLetters('lighthouse in the house');
assertEqual(test['h'], 4);
assertEqual(test['e'], 3);
assertEqual(test.e, 3);
