'use strict';

var lineCount = 7;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (var i = 1; i < lineCount + 1; i++) {
    if (i%2 != 0) {
        console.log(' '.repeat((lineCount - i) / 2) + "*".repeat(i));
    }
}