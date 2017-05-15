'use strict'
// Write a function, that takes a string as an argument and returns a dictionary with all letters in 
// the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

let CountLetters = function(str) {
    try {
        if(typeof str === 'string') {
            let dictionary = {};
            let strArray = str.split('');
            for(let i = 0; i < strArray.length; i++) {
                let filtered = strArray.filter(function(el) {
                    return el === strArray[i]
                })
                dictionary[strArray[i]] = filtered.length;
            }
            return dictionary;
        } else {
            throw new Error('Not a string');
        }
    } catch (error) {
        return error.message;
    }
}

module.exports = CountLetters;