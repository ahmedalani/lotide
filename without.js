/* eslint-disable func-names, no-console */
// takes 2 arrays as params, first one is original, second one is unwanted items
// loop through and remove unwanted itemes from original and output a new array
const without = function (source, itemsToRemove) {
  const output = [...source];
  for (let i = 0; i < source.length; i++) {
    const element = source[i];
    for (let j = 0; j < itemsToRemove.length; j++) {
      const elementToRemove = itemsToRemove[j];
      if (element === elementToRemove) {
        output.splice(i, 1);
      }
    }
  }
  return output;
};
// tests
console.log(without(['1', 2, 3], [1]));
console.log(without(['1', '2', '3'], [1, 2, '3']));
// more tests
const words = ['hello', 'world', 'lighthouse'];
console.log(without(words, ['lighthouse']));
console.log(words);

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     if (element !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log('They are ✅ matching');
//     return;
//   }
//   console.log(`This ${actual}❗️does not match ${expected}`);
// };
