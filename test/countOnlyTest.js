const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];
const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true });

describe('countOnly', () => {
  it('should return 1 for jason', () => {
    assert.strictEqual(result1['Jason'], 1);
  });
  it('should return undefined for Karima', () => {
    assert.strictEqual(result1['Karima'], undefined);
  });
  it('should retrun 2 for Fang', () => {
    assert.strictEqual(result1['Fang'], 2);
  });
});
