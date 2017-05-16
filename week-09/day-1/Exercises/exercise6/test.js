'use strict';

let test = require('tape');
let Fibonacci = require('./fibonacci.js');

test('fibonacci tests', function(t) {
    let fibonacci0 = Fibonacci(0);
    let fibonacciRandom1 = Fibonacci(5);
    let fibonacciRandom2 = Fibonacci(8);
    let fibonacciError = Fibonacci('string');
    let fibonacciMinus = Fibonacci(-5);
    let fibonacciInteger = Fibonacci(5.6);

    t.equal(fibonacci0, 0, 'test on 0');
    t.equal(fibonacciRandom1, 5, 'test random number (5)');
    t.equal(fibonacciRandom2, 21, 'test random number (8)');
    t.error(fibonacciError.message, 'test on string input');
    t.error(fibonacciMinus.message, 'test on minus number');
    t.error(fibonacciInteger.message, 'test on float numbers');
    t.end();
})