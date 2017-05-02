'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var a = 10;
var b = 12;
var c = 15;

var surface = 2 * (a * b + b * c + a * c);
var volume = a * b * c;

console.log(surface, volume);