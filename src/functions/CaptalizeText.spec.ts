import { expect, test, describe } from '@jest/globals';
import { capitalize } from './CaptalizeText';

describe('test - Captalize text', () => {
    test('should captalize the text', () => {
        let name = 'RAYSSA OLIVEIRA DA SILVA'
        expect(capitalize(name.toLowerCase())).toEqual('Rayssa Oliveira Da Silva')
    })
})
