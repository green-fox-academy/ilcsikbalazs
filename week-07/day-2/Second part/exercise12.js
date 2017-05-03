'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var lenghtOfMatrix = 6;

for (var x = 0; x < lenghtOfMatrix; x++) {
    console.log('0 '.repeat(lenghtOfMatrix - 1) + '1 ');
}