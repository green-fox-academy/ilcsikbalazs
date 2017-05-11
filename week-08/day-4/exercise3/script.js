// gmaps : AIzaSyCKAZ9hZh6-ukgy4JCF6ShJa3MW0yDHDe8
// mashapessrc = 8puGpXhUYumshKDj92AyIDbq09gYp1oZY9ojsnw7mj3PGwlytT
'use strict';
let coordinates = document.querySelector('p');
let cityName = document.querySelector('input');
let button = document.querySelector('button');
let gMaps = document.querySelector('iframe');
// console.log(gMaps.getAttribute('src'));
// src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCKAZ9hZh6-ukgy4JCF6ShJa3MW0yDHDe8&q=Budpapest"

button.addEventListener('click', function() {
    console.log(cityName.value);
    let url = "https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=" + cityName.value;
    let requestMashape = new XMLHttpRequest();
    requestMashape.onreadystatechange = function() {
        if(requestMashape.status === 200 && requestMashape.readyState === 4) {
            let allData = JSON.parse(requestMashape.response);
            console.log(allData);
            let lat = allData.Results[0].lat;
            let lon = allData.Results[0].lon;
            let cordsStr = lat + ' ' + lon;
            coordinates.textContent = cordsStr;
            console.log(lat, lon);
            let gUrl = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCKAZ9hZh6-ukgy4JCF6ShJa3MW0yDHDe8&q=" + cityName.value;
            gMaps.setAttribute('src', gUrl);
        }
    }
    requestMashape.open('GET', url)
    requestMashape.setRequestHeader("X-Mashape-Key", "8puGpXhUYumshKDj92AyIDbq09gYp1oZY9ojsnw7mj3PGwlytT")
    requestMashape.setRequestHeader("Accept", "application/json")
    requestMashape.send();
})


