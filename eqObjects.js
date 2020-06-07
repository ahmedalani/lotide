/* eslint-disable func-names, no-console, eol-last, no-restricted-syntax, guard-for-in */
// const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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
    if (Array.isArray(smallerObj[key])) {
      const result = eqArrays(smallerObj[key], biggerObj[key]);
      return result;
    }
    if (!smallerObj[key] || smallerObj[key] !== biggerObj[key]) {
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;