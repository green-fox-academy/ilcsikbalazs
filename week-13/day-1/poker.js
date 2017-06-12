'use srict';

class Card {
    constructor(number, color) {
        this.number = number;
        this.color = color;
        if(this.colorValidator() && this.numberValidator()) {
            return (this.number, this.color);
        }
    }
    colorValidator() {
        if(this.color === 'Hearts' || this.color === 'Spades' || this.color === 'Diamonds' || this.color === 'Clubs') {
            return true;
        }
    }
    numberValidator() {
        if(this.number <= 13 && this.number > 0) {
            // if(this.number === 11) {
            //     this.number = 'Jack';
            // } else
            // if(this.number === 12) {
            //     this.number = 'Queen';
            // } else
            // if(this.number === 13) {
            //     this.number = 'King';
            // } else
            // if(this.number === 1) {
            //     this.number = 'Ace';
            // }
            return true;
        }
    }
}

class Hand {
    constructor(card1, card2, card3, card4, card5) {
        this.card1 = card1;
        this.card2 = card2;
        this.card3 = card3;
        this.card4 = card4;
        this.card5 = card5;
        this.cardsArray = [this.card1, this.card2, this.card3, this.card4, this.card5];
    }
    flush() {
        if(this.cardsArray[0].color === this.cardsArray[1].color && this.cardsArray[0].color === this.cardsArray[2].color && this.cardsArray[0].color === this.cardsArray[3].color && this.cardsArray[0].color === this.cardsArray[4].color) {
            return true;
        } else {
            return false;
        }
    }
    highCard() {
        this.cardsArray.sort(function (a, b) {
            return a.number - b.number;
        });
        return this.cardsArray[4];
    }
    straight() {
        this.cardsArray.sort(function (a, b) {
            return a.number - b.number;
        });
        let correctArray = [];
        this.cardsArray.forEach(function(el, i) {
            if(i+1 < this.cardsArray.length) {
                if(Math.abs(this.cardsArray[i].number - this.cardsArray[i+1].number) === 1) {
                    correctArray.push(this.cardsArray[i].number);
                }
            }
        }.bind(this));

        let specialArray = [];
        this.cardsArray.forEach(function(element) {
            if(element.number === 1) {
                specialArray.push(element);
            } else if(element.number === 10) {
                specialArray.push(element);
            } else if(element.number === 11) {
                specialArray.push(element);
            } else if(element.number === 12) {
                specialArray.push(element);
            } else if(element.number === 13) {
                specialArray.push(element);
            }
        }.bind(this));

        if(specialArray.length === 5 || correctArray.length === 4) {
            return true
        } else {
            return false
        }
    }
    sameCards() {
        let pairsArray = []
        for(let i = 0; i < this.cardsArray.length; i++) {
            if(this.cardsArray[0].number === this.cardsArray[i].number && i != 0) {
                pairsArray.push(this.cardsArray[0]);
            }
            if(this.cardsArray[1].number === this.cardsArray[i].number && i != 1) {
                pairsArray.push(this.cardsArray[1]);
            }
            if(this.cardsArray[2].number === this.cardsArray[i].number && i != 2) {
                pairsArray.push(this.cardsArray[2]);
            }
            if(this.cardsArray[3].number === this.cardsArray[i].number && i != 3) {
                pairsArray.push(this.cardsArray[3]);
            }
            if(this.cardsArray[4].number === this.cardsArray[i].number && i != 4) {
                pairsArray.push(this.cardsArray[4]);
            }
        }
        return pairsArray;
    }
    onePair() {
        if(this.sameCards().length === 2) {
            return true;
        } else {
            return false;
        }
    }
    twoPairs() {
        if(this.sameCards().length === 4) {
            return true;
        } else {
            return false;
        }
    }
    threeOfAKind() {
        if(this.sameCards().length === 6) {
            return true
        } else {
            return false;
        }
    }
    fullHouse() {
        if(this.sameCards().length === 8) {
            return true
        } else {
            return false;
        }
    }
    fourOfAKind() {
        if(this.sameCards().length === 12) {
            return true
        } else {
            return false;
        }
    }
    straightFlush() {
        if(this.straight() && this.flush()) {
            return true;
        } else {
            return false;
        }
    }
    royalFlush() {
        this.cardsArray.sort(function (a, b) {
            return a.number - b.number;
        });
        let specialArray = [];
        this.cardsArray.forEach(function(element) {
            if(element.number === 1) {
                specialArray.push(element);
            } else if(element.number === 10) {
                specialArray.push(element);
            } else if(element.number === 11) {
                specialArray.push(element);
            } else if(element.number === 12) {
                specialArray.push(element);
            } else if(element.number === 13) {
                specialArray.push(element);
            }
        }.bind(this));
        if(this.flush() && specialArray.length === 5) {
            return true;
        } else {
            return false;
        }
    }
}

class Game {
    constructor(hand1, hand2) {
        this.hand1 = hand1;
        this.hand2 = hand2;
    }
    checkHand1() {
        let result = '';
        if(this.hand1.onePair()) {
            result = 'Pair';
        } if(this.hand1.twoPairs()) {
            result = 'Two Pairs';
        } if(this.hand1.threeOfAKind()) {
            result = 'Three of a kind';
        } if(this.hand1.straight()) {
            result = 'Straight';
        } if(this.hand1.flush()) {
            result = 'Flush';
        } if(this.hand1.fullHouse()) {
            result = 'Full house';
        } if(this.hand1.fourOfAKind()) {
            result = 'Four of a kind';
        } if(this.hand1.straightFlush()) {
            result = 'Straight flush';
        } if(this.hand1.royalFlush()) {
            result = 'Royal flush';
        }
        return result;
    }
    checkHand2() {
        let result = '';
        if(this.hand2.onePair()) {
            result = 'Pair';
        } if(this.hand2.twoPairs()) {
            result = 'Two Pairs';
        } if(this.hand2.threeOfAKind()) {
            result = 'Three of a kind';
        } if(this.hand2.straight()) {
            result = 'Straight';
        } if(this.hand2.flush()) {
            result = 'Flush';
        } if(this.hand2.fullHouse()) {
            result = 'Full house';
        } if(this.hand2.fourOfAKind()) {
            result = 'Four of a kind';
        } if(this.hand2.straightFlush()) {
            result = 'Straight flush';
        } if(this.hand2.royalFlush()) {
            result = 'Royal flush';
        }
        return result;
    }
    won() {
        
    }

}

let card1 = new Card(1, 'Hearts');
let card2 = new Card(12, 'Hearts');
let card3 = new Card(11, 'Hearts');
let card4 = new Card(10, 'Hearts');
let card5 = new Card(13, 'Hearts');
let hand1 = new Hand(card1, card2, card3, card4, card5);

let card6 = new Card(9, 'Hearts');
let card7 = new Card(9, 'Hearts');
let card8 = new Card(11, 'Clubs');
let card9 = new Card(10, 'Clubs');
let card10 = new Card(13, 'Clubs');
let hand2 = new Hand(card6, card7, card8, card9, card10);

let game = new Game(hand1, hand2);
console.log(game.checkHand1());
console.log(game.checkHand2());