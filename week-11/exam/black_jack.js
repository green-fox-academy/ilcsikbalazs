// # Create a Card class, that has a color and a value
// # Create a constructor for setting those values
// # Card should be represented as string in this format:
// # 9 Hearts
// # Jack Diamonds

let Card = function(color, value) {
    this.color = color;
    this.value = value;
}

Card.prototype.colorInspector = function() {
    if(this.color === 'Clubs' || this.color === 'Diamonds' || this.color === 'Hearts' || this.color === 'Spades' ) {
        return this.color;
    } else {
        console.log('Invalid color');
    }
}

Card.prototype.valueInspector = function() {
    if(this.value > 0 && this.value < 13) {
        if(this.value === 10) {
            return 'Jack';
        } else if(this.value === 11) {
            return 'Queen';
        } else if(this.value === 12) {
            return 'King';
        } else if(this.value === 1) {
            return 'Ace'
        } else {
            return this.value;
        }
    } else {
        console.log('Invalid value');
    }
}

Card.prototype.initPrinter = function() {
    console.log(this.valueInspector(), this.colorInspector());
}



// # Create a Deck class, that has a list of cards in it
let Deck = function(number) {
    this.number = parseInt(number);
    let colors = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    this.init = function() {
        let cards = [];
        for(let j = 0; j < 4; j++) {
            let newCard = new Card(colors[j], Math.floor((Math.random() * 12) + 1));
            for(let i = 0; i < this.number; i++) {
                cards.push(newCard);
            }
        }
        return cards;
    }
}
let card = new Card('Spades', 12);
card.initPrinter();
let deck = new Deck(5);
console.log(deck.init());

// # Create a constructor that takes a whole number as parameter
// # The constructor should fill the list with the number of different cards using at least 4 different colors 
// (except if the number given is smaller than four, than all cards should have different colors)
// # We should be able to shuffle the deck, which randomly orders the cards
// # We should be able to draw the top card which returns the drawn card and also removes it from the deck
// # Deck should be represented as string in this format:
// # 12 cards -  3 Clubs, 3 Diamonds, 3 Hearts, 3 Spades
// # print(deck)

// # Should print out:
// # 12 cards -  3 Clubs, 3 Diamonds, 3 Hearts, 3 Spades

// # top_card = deck.draw()
// # print(top_card)
// # print(deck)

// # Should print out:
// # Queen Spades
// # 11 cards - 3 Clubs, 3 Diamonds, 3 Hearts, 2 Spades

// deck = Deck(12)
