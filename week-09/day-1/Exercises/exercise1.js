'use strict';

// Handle the exceptions in the addString() function. It should check the type of the
// arguments, throw the right error and write it to the console.
// It should add the strings too if the arguments are appropriate.

let  addString = function(str1, str2, printStr){
    if (typeof str1 != 'string') {
        throw new Error('first is not a string');
    } else if (typeof str2 != 'string'){
        throw new Error('second is not a string');
    } else if (typeof printStr != 'function'){
        throw new Error('third is not a function');
    }
    let newStr = str1 + str2;
    printStr(newStr);
}

let printStr = function(str) {
  console.log(str);
}

try {
    addString('1234', '56789', 'printStr');
} catch (error) {
    console.log(error.message);
}