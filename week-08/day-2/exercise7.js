// Create an Animal constructor

var animal = {
    hungerValue: 50,
    thirstValue: 50,
    eat: function() {
        --this.hungerValue
    },
    drink: function() {
        --this.thirstValue
    },
    play: function() {
        ++this.thirstValue;
        ++this.hungerValue
    }
}

animal.eat();
animal.drink();
animal.play();
console.log(animal)

// Every animal has a hunger value, which is a number
// Every animal has a thirst value, which is a number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one
// Create a Farm constructor

var farm = {
    listOfAnimals: [],
    slots: 10,
    breed: function(animal) {
        if( this.listOfAnimals.length < this.slots ) {
            this.listOfAnimals.push(animal);
        }
    },
    slaughter: function(animal) {
        this.listOfAnimals.forEach(function(el) {
        });
    }
}

// Every farm has list of Animals
// Every farm has slots which defines the number of free places for animals
// Every farm can breed() which creates a new animal if there's place for it
// Every farm can slaughter() which removes the least hungry animal