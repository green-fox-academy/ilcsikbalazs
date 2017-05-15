'use strict';

let test = require('tape');
let sum = require('./sum.js');

test('test sum', function(t) {
    let integers0 = [];
    let integers1 = [1];
    let integersMultyElements = [1,2,3];
    let integersNull = [null];
    let integersString = ['hello','bello'];
    let sumOf0 = sum(integers0);
    let sumOf1 = sum(integers1);
    let sumOfMultyElements = sum(integersMultyElements);
    let sumOfNull = sum(integersNull);
    let sumOfString = sum(integersString);

    t.ok(typeof sum === 'function', 'test if sum is a function');
    t.equal(sumOf0, 0, 'test if returns 0 to an empty list');
    t.equal(sumOf1, 1, 'test if returns 1 to a one element list');
    t.equal(sumOfMultyElements, 6, 'test if runs on multyple element');
    t.notEqual(sumOfNull, null, 'test if returns null');
    t.notEqual(sumOfString, "hellobello", 'test if returns sum of strings');
    t.end();
})

