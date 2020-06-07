/* eslint-disable no-console, func-names, eol-last */
// tail function takes an array and returns a new array equals the original but
// without the first element
const tail = function (someArray) {
  // using the spread operator is redundant but I'm keeping it anyway!
  const arrTail = [...someArray];
  return arrTail.slice(1, someArray.length);
};

module.exports = tail;