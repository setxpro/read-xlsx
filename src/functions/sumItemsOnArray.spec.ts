import { expect, test, describe } from '@jest/globals';
import sumArray from './sumItemsOnArray';


describe('Testing of the Array', () => {

    test('should return the sum of the array', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(sumArray(array)).toEqual(55);
    });

})