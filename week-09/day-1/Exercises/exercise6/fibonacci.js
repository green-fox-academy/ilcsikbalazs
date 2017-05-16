// Fibonacci

// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests that covers all types of input (like in the previous workshop exercise)
'use strict';
let Fibonacci = function(number) {
    try {
        if(typeof number === 'number' && number >= 0 && parseInt(number) === number) {
            let F = 0;
            let prev = 1;
            let next;
            for (let i = 0; i < number ; ++i) {
                next = F + prev;
                prev = F;
                F = next;
            }
            return F;
        } else {
            throw new Error('Input is not a number');
        }
    } catch (error) {
        return error.message
    }
}

module.exports = Fibonacci;