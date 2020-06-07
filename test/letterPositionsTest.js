const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const test = letterPositions('hello');

describe('countOnly', () => {
  it('should return [2, 3] for position l in hello ', () => {
    assert.deepEqual(test.l, [2, 3]);
  });
});