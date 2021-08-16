const { test, expect, describe } = require('@jest/globals');
const fizzBuzz = require('./modules/fizzBuzz');

describe('FizzBuzz Function', () => {
    test('9 / 3 returns "Fizz"', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    test('25 / 5 returns "Buzz"', () => {
        expect(fizzBuzz(25)).toBe('Buzz');
    });

    test('15 / 3 || 5 returns "FizzBuzz"', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    test('11 not divisible by 3 || 5 returns 11', () => {
        expect(fizzBuzz(11)).toBe(11);
    });

    
});