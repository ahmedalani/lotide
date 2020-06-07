const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('eqArrays', () => {
  it('should return true', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should return false', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it('should return true', () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it('should return false', () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});
