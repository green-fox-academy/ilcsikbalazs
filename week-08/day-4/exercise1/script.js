'use strict';

var div = document.querySelector('div');

var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if(httpRequest.readyState === 4 && httpRequest.status === 200) {
        var pictures = JSON.parse(httpRequest.response);
        console.log(pictures);
        for(let i = 0; i < 16; i++) {
            let images = document.createElement('img');
            images.setAttribute('src', pictures.data[i].images.downsized_still.url);
            div.appendChild(images);
            images.addEventListener('click', function(){
                images.setAttribute('src', pictures.data[i].images.original.url);
            })
        }
    }
}
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=meme&api_key=dc6zaTOxFJmzC');
httpRequest.send();
