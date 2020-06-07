/* eslint-disable */
const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', () => {
  it('should return [] for middle of one element array', () => {
    assert.deepEqual(middle(['j']), []);
  });
  it('should return [] for 2 element array', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return ['c'] for ['j', 'c', 'j']", () => {
    assert.deepEqual(middle(['j', 'c', 'j']), ['c']);
  });
  it("should return [1, 2, 3, 4, 5] for [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return [1, 2, 3, 4] for [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [1, 2, 3, 4, 5, 6] for [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
