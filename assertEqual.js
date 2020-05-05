/* eslint-disable */
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  } 
  console.log(`This ${actual}❗️does not match ${expected}, there\'s an error`);
}
// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual('Lighthouse', 'Lighthouse');
assertEqual(1, 2);
assertEqual(1, 1);