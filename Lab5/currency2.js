class CurrencyConverter {
    constructor(exchangeRates) {
        this.exchangeRates = exchangeRates;
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    convertToPLN(amount, currency) {
        if (this.exchangeRates[currency]) {
            return this.roundTwoDecimals(amount * this.exchangeRates[currency]);
        }
        throw new Error('Unsupported currency: ' + currency);
    }
}

module.exports = CurrencyConverter;