const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

describe('countOnly', () => {
  it('should return "drama" key for The Wire', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it('should return undefined key for The Wire', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'That \'70s Show'), undefined);
  });
});
