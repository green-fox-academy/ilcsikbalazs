'use strict';
// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

var ai = [3, 4, 5, 6, 7];

function sumOf ( array ) {
    var sum = 0;
    for (var key in array) {
        sum += array[key];
    }
    console.log(sum);
}

sumOf(ai);