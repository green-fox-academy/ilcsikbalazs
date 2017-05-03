'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sumOf () {
    var sum = 0;
    for (var key in arguments) {
        sum += arguments[key];
    }
    console.log(sum);
}
sumOf(1,2,3);

function sum ( number ) {
    var sum = 0;
    for (var i = 1; i <= number; i++) {
        sum += i;
    }
    console.log(sum);
}
sum(3);