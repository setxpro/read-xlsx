import { expect, test, describe } from '@jest/globals';
import formatCurrentDate from './formatDate';

describe('format date', () => {

    test('should format current date from database', () => {
        let nDate = '20230501';
        expect(formatCurrentDate(nDate)).toEqual('01/05/2023')
    })

})