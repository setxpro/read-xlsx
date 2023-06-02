import { expect, test, describe } from '@jest/globals';
import formatNumber from './formatPhoneNumber';

describe('Should format numbers of the clients and sellers', () => {
    test('should format phone numbers', () => {

        let clientNumber = '93409877134'
        let storeNumer = '21-96607-7757'

        expect(formatNumber(clientNumber)).toEqual('5593409877134')
        expect(formatNumber(storeNumer)).toEqual('5521966077757')

        expect(typeof formatNumber(clientNumber)).toBe('string')
        expect(typeof formatNumber(storeNumer)).toBe('string')

        expect(formatNumber(clientNumber)).toBeDefined()
        expect(formatNumber(storeNumer)).toBeDefined()

    });
})