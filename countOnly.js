/* eslint-disable func-names, no-console, eol-last, dot-notation, no-restricted-syntax */
// takes arry and opject as params, count array elements based on classification from the obj
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
module.exports = countOnly;