'use strict';

let test = require('tape');
let countLetters = require('./countletters.js');

test('test Countletters', function(t) {
    let countLettersCheck = countLetters("hhhelooo");
    let countLettersNumbers = countLetters(1,2,12,3);
    let countLettersEmpty = countLetters();
    
    t.deepEqual(countLettersCheck, {h:3, e:1, l:1, o:3});
    t.error(countLettersNumbers.message, 'check if input is string');
    t.error(countLettersEmpty.message, 'check if there is input');
    t.end();
})