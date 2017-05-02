'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
for (var i = 1; i < lineCount; i++) {
    if (i === 1) {
        console.log('%'.repeat(lineCount));
    }else {
        console.log('%' + " ".repeat(lineCount - 2) + "%");
    }if (i === lineCount - 1) {
        console.log('%'.repeat(lineCount));
    }
}