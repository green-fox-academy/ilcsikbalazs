'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangles(a, b) {
    this.a = a;
    this.b = b;
}

Rectangles.prototype.getArea = function() {
    return this.a * this.b;
}

Rectangles.prototype.getCircumference = function() {
    return (this.a + this.b) * 2;
}

var rec = new Rectangles(5, 6);
console.log(rec.getArea());
console.log(rec.getCircumference());