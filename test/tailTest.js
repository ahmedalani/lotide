const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ['first', 'second', 'third'];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail([1, 2, 3, 4]).length, 3);
assertEqual(tail([1]).length, 0);