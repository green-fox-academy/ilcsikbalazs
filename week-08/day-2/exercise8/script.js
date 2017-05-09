var display = document.querySelectorAll('.display li');
var buttonUP = document.querySelector('.direction .up');
var buttonDOWN = document.querySelector('.direction .down');
var addPeople = document.querySelector('.migration .add');
var removePeople = document.querySelector('.migration .remove')
var numberOfPeople = 0;

buttonDOWN.addEventListener('click', function() {
    for (let i = 0; i < display.length; i++) {
        if(display[i].getAttribute('class') === 'unhidden') {
            display[i].setAttribute('class', 'hidden');
            display[i].textContent = '';
            i++;
            if(i === display.length) {
                display[display.length-1].setAttribute('class', 'unhidden');
            } else {
                display[i].setAttribute('class', 'unhidden');
            }
        }
    let unhidden = document.querySelector('.display .unhidden');
    unhidden.textContent = numberOfPeople;
    }
})

buttonUP.addEventListener('click', function() {
    for (let i = 0; i < display.length; i++) {
        if(display[i].getAttribute('class') === 'unhidden') {
            display[i].setAttribute('class', 'hidden');
            display[i].textContent = '';
            i--;
            if(i === -1) {
                display[0].setAttribute('class', 'unhidden');
                let unhidden = document.querySelector('.display .unhidden');
                unhidden.textContent = numberOfPeople;
                break;
            } else {
                display[i].setAttribute('class', 'unhidden');
            }
        } 
    let unhidden = document.querySelector('.display .unhidden');
    unhidden.textContent = numberOfPeople;
    }
})

function peopleInElevator() {
    if (numberOfPeople >= 10) {
        numberOfPeople = 10;
    } else if (numberOfPeople <= 0) {
        numberOfPeople = 0;
    }
    let unhidden = document.querySelector('.display .unhidden');
    unhidden.textContent = numberOfPeople;
}

addPeople.addEventListener('click', function() {
    numberOfPeople = numberOfPeople + 1
    peopleInElevator();
})

removePeople.addEventListener('click', function() {
    numberOfPeople = numberOfPeople - 1
    peopleInElevator();
})