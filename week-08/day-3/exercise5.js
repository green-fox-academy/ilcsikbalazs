'use strict';

var apple = function() {
    console.log('apple');
}
var pear = function() {
    console.log('pear');
}
var melon = function() {
    console.log('melon');
}
var grapes = function() {
    console.log('grapes');
}
apple();
setTimeout(pear, 1000);
setTimeout(melon, 3000);
setTimeout(grapes, 5000);
// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds