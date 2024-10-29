class MyMathModule {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        return b !== 0 ? a / b : 'Cannot divide by zero';
    }
    
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}

module.exports = MyMathModule;