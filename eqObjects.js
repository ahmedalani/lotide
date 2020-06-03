/* eslint-disable func-names, no-console, eol-last, no-restricted-syntax */
// takes 2 params and check if they match
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  }
  console.log(`This ${actual}❗️does not match ${expected}`);
};
// takes 2 objects as params and return true or fals based on perfect match
const eqObjects = function (obj1, obj2) {
  let biggerObj = {};
  let smallerObj = {};
  if (Object.keys(obj1).length > Object.keys(obj2).length) {
    biggerObj = { ...obj1 };
    smallerObj = { ...obj2 };
  } else {
    biggerObj = { ...obj2 };
    smallerObj = { ...obj1 };
  }
  for (const key in biggerObj) {
    if (!smallerObj[key] || smallerObj[key] !== biggerObj[key]) {
      return false;
    }
  }
  return true;
};
// Tests
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
const z = { a: 1, b: '3' };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, z), false);

