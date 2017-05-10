// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds and it should show a text under the button: 
// 2 seconds ellapsed

var button = document.querySelector('button');
var text = document.createElement('p');
var div = document.querySelector('.textHere');
text.textContent = 'blalalalalalalal';

function addText() {
    div.appendChild(text);
}
button.addEventListener('click', setTimeout(addText, 2000));