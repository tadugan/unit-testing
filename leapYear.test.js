const { test, expect, describe } = require('@jest/globals');
const isLeapYear = require('./modules/isLeapYear');

describe('Leap Year', () => {
    test('2000 is a leap year, returns true', () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    test('1100 is not a leap year, divisible by 100 && 4, returns false', () => {
        expect(isLeapYear(1100)).toBe(false);
    });

    test('2040 is a leap year, returns true', () => {
        expect(isLeapYear(2040)).toBe(true);
    });
});