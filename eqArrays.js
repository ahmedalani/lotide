/* eslint-disable func-names, no-console */
// takes two arrays as parameters and return true if they match false otherwise
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

module.exports = eqArrays;