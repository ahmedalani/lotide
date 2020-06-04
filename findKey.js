/* eslint-disable */
const findKey = function (obj, cb) {
  for (key in obj) {
    if (cb(obj[key])) {
      return key;
    };
  };
};
// takes 2 params and check if they match
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('They are ✅ matching');
    return;
  } 
  console.log(`This ${actual}❗️does not match ${expected}, there\'s an error`);
}
// Test
findKey({
  'Blue Hill': { stars: 1 },
  'Akaleri':   { stars: 3 },
  'noma':      { stars: 2 },
  'elBulli':   { stars: 3 },
  'Ora':       { stars: 2 },
  'Akelarre':  { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(
  findKey({
  'Blue Hill': { stars: 1 },
  'Akaleri':   { stars: 3 },
  'noma':      { stars: 2 },
  'elBulli':   { stars: 3 },
  'Ora':       { stars: 2 },
  'Akelarre':  { stars: 3 }
}, x => x.stars === 2), 'noma');