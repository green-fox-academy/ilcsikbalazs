'use strict';
let youSay = document.querySelector('input');
let button = document.querySelector('button');
let div = document.querySelector('div');
button.addEventListener('click', function() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if(httpRequest.status === 200 && httpRequest.readyState === 4) {
            let output = document.createElement('p');
            let yodaSays = httpRequest.response;
            console.log(yodaSays);
            output.textContent = yodaSays;
            div.appendChild(output);
        }
    }
    httpRequest.open("GET","https://yoda.p.mashape.com/yoda?sentence=" + youSay.value);
    httpRequest.setRequestHeader("X-Mashape-Key", "8puGpXhUYumshKDj92AyIDbq09gYp1oZY9ojsnw7mj3PGwlytT");
    httpRequest.setRequestHeader("Accept", "text/plain");
    httpRequest.send();
})