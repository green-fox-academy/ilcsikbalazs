'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animals(words) {
    this.speak = words;
};

Animals.prototype.say = function() {
    console.log(this.speak);
}

let dog = new Animals("bark");
dog.say();