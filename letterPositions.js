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
// takes a sentence as parameter and return an and obj with each letter index (zero based)
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === ' ') {
      console.log('found space!');
    } else if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};
// Tests
const test = letterPositions('hello');
assertEqual(eqArrays(test.l, [2, 3]), true);