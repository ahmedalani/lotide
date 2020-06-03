/* eslint-disable func-names, no-console, eol-last */
// takes 2 params and check if they match
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  }
  console.log(`This ${actual}❗️does not match ${expected}`);
};
// takes an obj and a value as params, returns the first key that contain the matching value
const findKeyByValue = function () {

};