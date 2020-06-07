const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([]), undefined);
assertEqual(head([1, 2, 3]), 1);
assertEqual(head(['hello', 2, 3]), 'hello');