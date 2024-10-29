const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Cannot divide by zero';
const power = (base, exponent) => Math.pow(base, exponent);

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power
};