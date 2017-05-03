'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var maxSeconds = 24 * 60 * 60;
var currentTime = (currentHours * 60 * 60) + (currentMinutes * 60) + (currentSeconds);
var secondsLeft = maxSeconds - currentTime;
console.log(secondsLeft);