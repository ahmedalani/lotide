/* eslint-disable func-names, no-console, eol-last */
// takes one array as parameter and return the middle element (one if odd, two if even)
const middle = function (arr) {
  const output = [];
  const arrLength = arr.length;
  // too short
  if (arrLength < 3) {
    return output;
  }
  // even
  if (!(arrLength % 2)) {
    const midOne = arrLength / 2;
    const midTwo = midOne - 1;
    output.push(arr[midTwo], arr[midOne]);
  }
  // odd
  if (arrLength % 2) {
    const mid = Math.floor(arrLength / 2);
    output.push(arr[mid]);
  }
  return output;
};

module.exports = middle;