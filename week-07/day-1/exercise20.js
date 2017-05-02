'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
for (var i = 1; i < lineCount + 1; i++) {
    if (i%2 != 0) {
        console.log(' '.repeat((lineCount - i) / 2) + "*".repeat(i));
    }
}

for (var j = 1; j < lineCount + 1; j++) {
    if (j%2 === 0) {
        console.log(' '.repeat(j / 2) + "*".repeat(lineCount - j));
    }
}