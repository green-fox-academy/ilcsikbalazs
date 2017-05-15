'use strict';

let test = require('tape');
let myobject = require('./apples.js');

test('get "apple"', function(t) {
    let appleFunction = myobject.getApple;
    let apple = myobject.getApple();

    t.ok(typeof myobject === 'object');
    t.ok(typeof appleFunction === 'function');
    t.equal(apple, 'apple');
    t.end();
})