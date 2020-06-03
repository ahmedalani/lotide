/* eslint-disable func-names, no-console, eol-last, dot-notation, no-restricted-syntax */
// takes 2 params and check if they match
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  }
  console.log(`This ${actual}❗️does not match ${expected}`);
};
