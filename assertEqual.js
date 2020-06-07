/* eslint-disable */
// takes 2 parameter and use the === operator to check if the params match
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  }
  console.log(`This ${actual}❗️does not match ${expected}, there\'s an error`);
}
module.exports = assertEqual;
