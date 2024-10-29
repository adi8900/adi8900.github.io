const readline = require('readline');
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculate = (num1, num2) => {
    const results1 = {
        addition: math1.add(num1, num2),
        subtraction: math1.subtract(num1, num2),
        multiplication: math1.multiply(num1, num2),
        division: math1.divide(num1, num2),
        power: math1.power(num1, num2)
    };

    const math2 = new MyMathModule();
    const results2 = {
        addition: math2.add(num1, num2),
        subtraction: math2.subtract(num1, num2),
        multiplication: math2.multiply(num1, num2),
        division: math2.divide(num1, num2),
        power: math2.power(num1, num2)
    };

    console.log(`Wyniki dla liczby ${num1} i ${num2}:`);
    console.log(`Wersja 1:`);
    console.log(`Dodawanie: ${results1.addition}`);
    console.log(`Odejmowanie: ${results1.subtraction}`);
    console.log(`Mnożenie: ${results1.multiplication}`);
    console.log(`Dzielenie: ${results1.division}`);
    console.log(`Potęgowanie: ${results1.power}`);
    
    console.log(`Wersja 2:`);
    console.log(`Dodawanie: ${results2.addition}`);
    console.log(`Odejmowanie: ${results2.subtraction}`);
    console.log(`Mnożenie: ${results2.multiplication}`);
    console.log(`Dzielenie: ${results2.division}`);
    console.log(`Potęgowanie: ${results2.power}`);
};

const askQuestion = () => {
    rl.question('Podaj dwie liczby (np. 2 3) lub "exit" aby zakończyć: ', (input) => {
        if (input.toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        const numbers = input.split(' ').map(Number);
        if (numbers.length !== 2 || numbers.some(isNaN)) {
            console.log('Proszę podać dokładnie dwie liczby.');
            askQuestion();
            return;
        }

        const [num1, num2] = numbers;
        calculate(num1, num2);
        askQuestion();
    });
};

askQuestion();
