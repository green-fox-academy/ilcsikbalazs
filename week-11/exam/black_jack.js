// # Create a Card class, that has a color and a value
// # Create a constructor for setting those values
// # Card should be represented as string in this format:
// # 9 Hearts
// # Jack Diamonds

// # Create a Deck class, that has a list of cards in it
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

let Card = function(color, value) {
    this.color = color;
    this.value = value;
    if(this.color === 'Clubs' || this.color === 'Diamonds' || this.color === 'Hearts' || this.color === 'Spades' ) {
        this.color;
        if(this.value > 0 && this.value < 13) {
            if(this.value === 10) {
                this.value = 'Jack';
            } else if(this.value === 11) {
                this.value = 'Queen';
            } else if(this.value === 12) {
                this.value = 'King';
            } else if(this.value === 1) {
                this.value = 'Ace'
            }
        } else {
            console.log('Invalid value');
        }
    } else {
        console.log('Invalid color');
    }
}

Card.prototype.printer = function() {
    console.log(this.value, this.color);
}

let Deck = function(number) {
    this.number = parseInt(number);
    this.clubs = parseInt(this.number/4);
    this.diamonds = parseInt(this.number/4);
    this.hearts = parseInt(this.number/4);
    this.spades = parseInt(this.number/4);
}

Deck.prototype.init = function() {
    let add = this.number - 4 * (parseInt(this.number/4));
    if(add === 1) {
        this.spades++;
    } else if(add === 2) {
        this.spades++;
        this.hearts++;
    } else if(add === 3) {
        this.spades++;
        this.hearts++;
        this.diamonds++;            
    }
}

Deck.prototype.printDeck = function() {
    console.log(this.number + ' cards ' + ' - ' + this.clubs  + ' Clubs ' +  this.diamonds + ' Diamonds ' +  this.hearts + ' Hearts ' +  this.spades + ' Spades ');
}

Deck.prototype.fillDeck = function() {
    this.deckArray = [];
    for(let i = 0; i < this.clubs; i++) {
        let card = new Card('Clubs', Math.floor((Math.random() * 12) + 1));
        this.deckArray.push(card);
    }
    for(let i = 0; i < this.diamonds; i++) {
        let card = new Card('Diamonds', Math.floor((Math.random() * 12) + 1));
        this.deckArray.push(card);
    }
    for(let i = 0; i < this.hearts; i++) {
        let card = new Card('Hearts', Math.floor((Math.random() * 12) + 1));
        this.deckArray.push(card);
    }
    for(let i = 0; i < this.spades; i++) {
        let card = new Card('Spades', Math.floor((Math.random() * 12) + 1));
        this.deckArray.push(card);
    }
}

Deck.prototype.shuffle = function() {
    for (let i = this.deckArray.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [this.deckArray[i - 1], this.deckArray[j]] = [this.deckArray[j], this.deckArray[i - 1]];
    }
}

Deck.prototype.topCard = function() {
    this.deckArray[this.deckArray.length-1].printer();
    this.number--;
    if(this.deckArray[this.deckArray.length-1].color === 'Clubs') {
        this.clubs--
    } else if(this.deckArray[this.deckArray.length-1].color === 'Diamonds') {
        this.diamonds--
    } else if(this.deckArray[this.deckArray.length-1].color === 'Hearts') {
        this.hearts--
    } else if(this.deckArray[this.deckArray.length-1].color === 'Spades') {
        this.spades--
    } 
    this.deckArray.pop();
}

let deck = new Deck(7);
deck.init();
deck.printDeck();
deck.fillDeck();
deck.shuffle();
deck.topCard();
deck.printDeck();