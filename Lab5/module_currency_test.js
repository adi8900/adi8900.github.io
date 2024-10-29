const currency1 = require('./currency1');
const Currency = require('./currency2');

const exchangeRates = {
    usd: 4.02,
    eur: 4.50,
    gbp: 5.20,
    cad: 3.30,
    chf: 4.60,
};

const currency2 = new Currency(exchangeRates);

try {
    console.log('10 USD to PLN (currency1):', currency1.convertToPLN(10, 'usd'));
    console.log('10 EUR to PLN (currency1):', currency1.convertToPLN(10, 'eur'));
    console.log('10 GBP to PLN (currency1):', currency1.convertToPLN(10, 'gbp'));
    console.log('10 CAD to PLN (currency1):', currency1.convertToPLN(10, 'cad'));
    console.log('10 CHF to PLN (currency1):', currency1.convertToPLN(10, 'chf'));
} catch (error) {
    console.error('Error in currency1:', error.message);
}

try {
    console.log('10 USD to PLN (currency2):', currency2.convertToPLN(10, 'usd'));
    console.log('10 EUR to PLN (currency2):', currency2.convertToPLN(10, 'eur'));
    console.log('10 GBP to PLN (currency2):', currency2.convertToPLN(10, 'gbp'));
    console.log('10 CAD to PLN (currency2):', currency2.convertToPLN(10, 'cad'));
    console.log('10 CHF to PLN (currency2):', currency2.convertToPLN(10, 'chf'));
} catch (error) {
    console.error('Error in currency2:', error.message);
}