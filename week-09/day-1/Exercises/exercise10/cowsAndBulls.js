'use strict';

let RandomNumbers = function() {
    let randomArray = [];
    while(true) {
        let randomNumber = Math.floor(Math.random() * 10);
        if(randomNumber !== 0 && randomNumber != 10 && randomArray.includes(randomNumber) === false) {
            randomArray.push(randomNumber);
        }
        if(randomArray.length === 4) {
            break;
        }
    }
    return randomArray;
}

let CAB = {
    numbers: RandomNumbers(),
    playing: true,
    guessCounter: 0,
    GuessMethod: function(guess) {
        let getResult = [];
        
        guess.forEach(function(element, index) {
            if(strNumbers[index] === strGuess[index]) {
                getResult.push("cow");
            }
            if(this.numbers.includes(element) && this.numbers[index] != guess[index]) {
                getResult.push("bull");
            }
        }.bind(this));
        return getResult;
    }
}

//game
while(CAB.playing) {
    console.log(CAB.GuessMethod([1,2,3,4]));
    if(CAB.guessCounter === 15) {
        console.log('You lose');
        CAB.playing = false;
    }
    if(CAB.GuessMethod([1,2,3,4]) === ['cow','cow','cow','cow']) {//input needed
        console.log('You won');
        CAB.playing = false;
    } else {
        CAB.guessCounter++;
    }

}
console.log(CAB.GuessMethod([4,5,3,1]));