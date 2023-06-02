export const numberFormatterCompact = (value: number, locale: string) => {
    return new Intl.NumberFormat(locale, {
        notation: 'compact' 
    }).format(value)
} // 2K

// locale = 'pt-BR' 'en-US'


export const currencyFormatter = (currency: number, locale: string) => {
    return new Intl.NumberFormat(locale, {
        currency: 'BRL',
        style: 'currency'
    }).format(currency)
} // R$ 2.000,00

export const dateFormatter = (date: Date, locale: string) => {
    return Intl.DateTimeFormat(locale, {
        dateStyle: 'short'
    }).format(date);
} 

export const relaiveDateFormatter = (amount: number, locale: string) => {
    return new Intl.RelativeTimeFormat(locale, {
        numeric: 'auto'
    }).format(amount, 'hours')
}