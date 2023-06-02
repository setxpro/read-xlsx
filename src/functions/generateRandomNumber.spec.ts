import { expect, test, describe } from '@jest/globals';
import generateRandomNumber from './generateRandomNumber';

describe('app', () => {
    test('should format random numbers', () => {
        let formatRandomNumber1 = 5
        let formatRandomNumber2 = 10
        let formatRandomNumber3 = 15

        expect(generateRandomNumber(formatRandomNumber1)).toHaveLength(5);
        expect(generateRandomNumber(formatRandomNumber2)).toHaveLength(10);
        expect(generateRandomNumber(formatRandomNumber3)).toHaveLength(15);
    });
})