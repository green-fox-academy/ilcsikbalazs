'use strict';
// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

var aj = [3, 4, 5, 6, 7];
aj.reverse();

var newAj = []
for (var i = 0; i < aj.length ; i++) {
    newAj.push(aj[i]);
}

console.log(aj);
console.log(newAj);
