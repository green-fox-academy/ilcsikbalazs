'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print

function selectLastEvenNumber(array, printThis) {
    printThis(array);
};

// var selectLastEvenNumber = function(array, printThis) {
//     printThis(array);
// };