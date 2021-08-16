const { test, expect, describe } = require('@jest/globals');
const sum = require('./modules/sum');

describe('Sum Function', () => {
    test('sum of 1 and 2 returns 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
});