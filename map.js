/* eslint-disable func-names, no-restricted-syntax */
const map = function (arr, cb) {
  const results = [];
  for (const item of arr) {
    results.push(cb(item));
  }
  return results;
};
module.exports = map;

// Test
// const words = ['ground', 'control', 'to', 'major', 'tom'];
// const results1 = map(words, word => word[0]);
// console.log(results1);
