'use strict';
// Create a function that takes an array of integers and returns the 
// biggest from each of its second elements like: [1, 3, 8, 6, 7, 4] would return 6

function secondBiggestInt(array) {
    let biggest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggest && i%2 !== 0) {
            biggest = array[i];
        }
    }
    return biggest;
}

let intArray = [1, 3, 8, 6, 7, 4];
console.log(secondBiggestInt(intArray));