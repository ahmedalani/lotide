/* eslint-disable func-names, no-console, eol-last */

// takes a sentence as parameter and return an and obj with each letter index (zero based)
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === ' ') {
      console.log('found space!');
    } else if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};
module.exports = letterPositions;