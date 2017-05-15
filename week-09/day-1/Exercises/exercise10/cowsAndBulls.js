'use strict';

// Create a class what is capable of playing exactly one game of Cows and Bulls (CAB).
// The player have to guess a 4 digit number. For every digit that the player guessed correctly in the
// correct place, they have a “cow”. For every digit the player guessed correctly in the wrong place is a “bull.”

// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result
// All methods, including constructor should be tested

let CAB = {
    numbers: [1,6,4,8],
    playing: true,
    guessCounter: 0,
    GuessMethod: function(guess) {
        let strGuess = "";
        let strNumbers = "";
        guess.forEach(function(element) {
            strGuess += element;
        });
        this.numbers.forEach(function(element) {
            strNumbers += element;
        });
        guess.forEach(function(element, index) {
            if(strNumbers[index] === strGuess[index]) {
                console.log("cow")
            }

            if(this.numbers.includes(element) && strNumbers[index] != strGuess[index]) {
                console.log("bull");
            }
        }.bind(this));
    }
}

CAB.GuessMethod([8,1,6,4])