/* eslint-disable func-names, no-restricted-syntax */
const words = ['ground', 'control', 'to', 'major', 'tom'];
const map = function (arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);
