// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
var number = 4

for (var i = 1; i < number * 2 + 1; i++) {
    if (i%2 === 0) {
        console.log(" " + " %".repeat(number));
    }else {
        console.log(" %".repeat(number));
    }
}