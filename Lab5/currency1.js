const exchangeRates = {
    usd: 4.02,
    eur: 4.50,
    gbp: 5.20,
    cad: 3.30,
    chf: 4.60,
};

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.convertToPLN = function(amount, currency) {
    if (exchangeRates[currency]) {
        return roundTwoDecimals(amount * exchangeRates[currency]);
    }
    throw new Error('Unsupported currency: ' + currency);
};