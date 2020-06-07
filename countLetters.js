/* eslint-disable func-names, no-console, eol-last, dot-notation, no-restricted-syntax */
// const assertEqual = require('./assertEqual');

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
module.exports = countLetters;
// Tests
// const test = countLetters('lighthouse in the house');
// assertEqual(test['h'], 4);
// assertEqual(test['e'], 3);
// assertEqual(test.e, 3);
