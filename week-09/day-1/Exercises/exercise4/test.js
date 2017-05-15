'use strict';

let test = require('tape');
let anagram = require('./anagram.js');

test('test anagram', function(t) {
    t.ok(typeof anagram === 'function');
    
    t.end();
})