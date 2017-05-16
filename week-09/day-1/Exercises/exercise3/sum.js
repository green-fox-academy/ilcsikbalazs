'use strict'
let integers = [1,2,3,4,5,6]

let sum = function(integers) {
    try {
        integers.forEach(function(element) {
            if(typeof element != 'number') {
                throw new Error('not number');
            }
        });
        let sumOfInts = 0;
        integers.forEach(function(element) {
            sumOfInts += element;
        });
        return sumOfInts;
    } catch (error) {
        console.log(error.message);
    }
}

console.log(typeof integers);
module.exports = sum;