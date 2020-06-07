const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
const z = { a: 1, b: '3' };

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
const cd2 = { c: '1', d: ['2', 3, 4] };

describe('countOnly', () => {
  it('should return true for ab and ba', () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it('should return false for ab and abc', () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it('should return false for ab and z', () => {
    assert.strictEqual(eqObjects(ab, z), false);
  });
  it('should return true for cd and dc arrays', () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it('should return false for cd and cd2 arrays', () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});
