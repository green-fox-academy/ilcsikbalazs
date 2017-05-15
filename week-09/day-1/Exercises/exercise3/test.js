'use strict';

let test = require('tape');
let sum = require('./sum.js');

test('test sum', function(t) {
    let integers0 = [];
    let integers1 = [1];
    let integers123 = [1,2,3];
    let sumOf0 = sum(integers0);
    let sumOf1 = sum(integers1);
    let sumOf123 = sum(integers123);

    t.ok(typeof sum === 'function', 'test if sum is a function');
    t.equal(sumOf0, 0, 'test if returns 0 to an empty list');
    t.equal(sumOf1, 1, 'test if returns 1 to a one element list');
    t.equal(sumOf123, 6, 'test if returns sum of 1 + 2 + 3');
    t.end();
})

