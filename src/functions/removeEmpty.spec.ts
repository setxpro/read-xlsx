import { expect, test, describe } from '@jest/globals';
import { removeEmpty } from './removeEmpty';

describe('should remove sapace empty', () => {
    test('should remove spaces empty', () => {
        let name = 'RAYSSA OLIVEIRA DA SILVA                '
        expect(removeEmpty(name)).toEqual('RAYSSA OLIVEIRA DA SILVA')
    })
 
})
