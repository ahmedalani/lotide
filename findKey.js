/* eslint-disable */
// const assertEqual = require('./assertEqual');

const findKey = function (obj, cb) {
  for (key in obj) {
    if (cb(obj[key])) {
      return key;
    };
  };
};
module.exports = findKey;

// Test
// findKey({
//   'Blue Hill': { stars: 1 },
//   'Akaleri': { stars: 3 },
//   'noma': { stars: 2 },
//   'elBulli': { stars: 3 },
//   'Ora': { stars: 2 },
//   'Akelarre': { stars: 3 }
// }, x => x.stars === 2) // => "noma"
// assertEqual(
//   findKey({
//     'Blue Hill': { stars: 1 },
//     'Akaleri': { stars: 3 },
//     'noma': { stars: 2 },
//     'elBulli': { stars: 3 },
//     'Ora': { stars: 2 },
//     'Akelarre': { stars: 3 }
//   }, x => x.stars === 2), 'noma');