import { expect, test, describe } from '@jest/globals';
import storePhoneNumbers from './actionToReadFileStore';

describe('Should read file chip_loja.xlsx', () => {
    test('should read file .xlsx and resutn json', () => {

        expect(storePhoneNumbers).toBeDefined()
        expect(storePhoneNumbers.length).toBeGreaterThan(0)
        expect(typeof storePhoneNumbers).toBe('object')
    });
})