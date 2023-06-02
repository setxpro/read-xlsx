import { expect, test, describe } from '@jest/globals';
import { currencyFormatter, dateFormatter, numberFormatterCompact, relaiveDateFormatter } from './../../../bot/src/functions/IntlFunctions';

describe('Test intl functions', () => {

    test('should format number to compact', () => {
        let value = 10000000
        let locale = 'pt-BR'
        expect(typeof numberFormatterCompact(value, locale)).toBe('string')
    });

    test('should format value to currency', () => {
        let value = 10000000
        let locale = 'pt-BR'
        expect(typeof currencyFormatter(value, locale)).toBe('string')
    })

    test('should format date', () => {
        let date = new Date('2023-05-30T12:33:42.000Z');
        expect(dateFormatter(date)).toBe('30/05/2023')
    })

    test('shound test the quantative days', () => {
        let futureDays = 10
        let lastDays = -10
        let locale = 'pt-BR'
        expect(relaiveDateFormatter(futureDays, locale)).toBe('em 10 dias')
        expect(relaiveDateFormatter(lastDays, locale)).toBe('há 10 dias')

        expect(typeof relaiveDateFormatter(futureDays, locale)).toBe('string')
        expect(typeof relaiveDateFormatter(lastDays, locale)).toBe('string')
    })
})