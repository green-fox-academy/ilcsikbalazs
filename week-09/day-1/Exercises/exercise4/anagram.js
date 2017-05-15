// Anagram
// Write a function, that takes two strings and returns a
//  boolean value based on if the two strings are Anagramms or not.
// Create a test for that.
'use strict';

let Anagram = function(string1, string2) {
    let anagram = '';
    for (var i = string1.length-1; i >= 0; i--) {
        anagram += string1[i];
    }
    if(anagram === string2) {
        return true;
    } else {
        return false;
    }
}

module.exports = Anagram;