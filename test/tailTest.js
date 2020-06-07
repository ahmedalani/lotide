/* eslint-disable */
const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', () => {
  it("should return tail of ['first', 'second', 'third']", () => {
    const words = ['first', 'second', 'third'];
    assert.deepEqual(tail(words), ['second', 'third']);
  });
  it("should return tail of [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("should return [] for tail of [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
});