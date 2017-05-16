'use strict';

let test = require('tape');
let Anagram = require('./anagram.js');

test('test anagram', function(t) {
    let anagramBasicTrue = Anagram('hello', 'olleh');
    let anagramBasicFalse = Anagram('hello', 'hello');
    let anagramIntegers = Anagram(1, 1);
    let anagramNoParameters = Anagram();

    t.ok(typeof Anagram === 'function', 'test if function');
    t.equal(anagramBasicTrue, true, 'test strings on true');
    t.equal(anagramBasicFalse, false, 'test strings on false');
    t.error(anagramIntegers, 'test if throws error');
    t.notEqual(anagramNoParameters, true, 'test on no parameters');
    t.end();
})