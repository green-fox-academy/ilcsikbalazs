// Create a simple HTML document with one button. If the user clicks the button 3 times, 
// and 5 seconds is already ellapsed since the page is loaded, 
// a text should apper under the button: 5 seconds ellapsed and clicked 3 times
var button = document.querySelector('button');
var text = document.createElement('p');
var counter = 0;
var timeIsOver = false;
var div = document.querySelector('.textHere');
text.textContent = 'blalalalalalalal';

function addText() {
    div.appendChild(text);
}

function checkState() {
    if (counter === 3 && timeIsOver === true) {
        addText();
    }
}

setTimeout(function(){
    timeIsOver = true;
    checkState();
}, 5000);

button.addEventListener('click', function(){
    counter++;
    console.log(counter);
    checkState();
});