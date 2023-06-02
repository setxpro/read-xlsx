import { expect, test, describe } from '@jest/globals';
import preferredSellers from './actionToReadFileSellers';

describe('Should read file sellers.xlsx', () => {
    test('should read file .xlsx and resutn json', () => {

        expect(preferredSellers).toBeDefined()
        expect(preferredSellers.length).toBeGreaterThan(0)
        expect(typeof preferredSellers).toBe('object')
    });
})