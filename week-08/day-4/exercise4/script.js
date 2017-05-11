'use strict';
let httpRequest = new XMLHttpRequest();
httpRequest.open("GET","https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.");
httpRequest.setRequestHeader("X-Mashape-Key", "8puGpXhUYumshKDj92AyIDbq09gYp1oZY9ojsnw7mj3PGwlytT");
httpRequest.setRequestHeader("Accept", "text/plain");
httpRequest.send();

httpRequest.onreadystatechange = function () {
    
}
