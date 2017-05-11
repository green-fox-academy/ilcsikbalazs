var div = document.querySelector('div');



var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if(httpRequest.readyState === 4 && httpRequest.status === 200) {
        var pictures = JSON.parse(httpRequest.response);
        console.log(pictures);
        for(let i = 0; i < 2; i++) {
            var image = pictures.data[i].images.downsized_still.url;
            var images = document.createElement('img');
            images.setAttribute('src', image);
            images.addEventListener('click', function(){
                gif = pictures.data[i].images.original.url;
                images.setAttribute('src', gif);
            })
            div.appendChild(images);
        }
        
    }
}
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=meme&api_key=dc6zaTOxFJmzC');
httpRequest.send();
