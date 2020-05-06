/* eslint-disable func-names, no-console */
// function returns the head of array (first element)
const head = function (someArray) {
  return someArray[0];
};
// assert function takes two paramiters and check if they match (test function)
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('✅');
    return;
  }
  console.log(`❗️This ${actual}does not match ${expected}, there\'s an error`);
};
// tests
assertEqual(head([], undefined));
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(['hello', 2, 3]), 'hello');