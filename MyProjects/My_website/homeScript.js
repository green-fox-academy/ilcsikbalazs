//menu
var idhome = document.querySelector('#idhome');
var idcontact = document.querySelector('#idcontact');
var idcv = document.querySelector('#idcv');
var idgallery = document.querySelector('#idgallery');

function setClasses(variable) {
    var visible = document.querySelector('.visible');
    visible.setAttribute('class', 'unvisible');
    var variable = document.querySelector('.'+variable);
    if (variable.parentNode.getAttribute('class') === 'unvisible'){
        variable.parentNode.setAttribute('class', 'visible');
    }
}

idhome.addEventListener('click', function(){
    setClasses('home');
})

idcontact.addEventListener('click', function(){
    setClasses('contact')
})

idcv.addEventListener('click', function(){
    setClasses('cv')
})

idgallery.addEventListener('click', function(){
    setClasses('gallery');
})


//comments
let email = document.querySelector('.comment .email input');
let commentText = document.querySelector('.comment .text textarea');
let sendButton = document.querySelector('.comment button');
let stupidBackend = {
    email: [],
    comment : []
};

sendButton.addEventListener('click', function() {
    stupidBackend.email.push(email.value);
    stupidBackend.comment.push(commentText.value);
    console.log(stupidBackend);
})


//gallery
let div = document.querySelector('.gallery .main');
let searchData = document.querySelector('.gallery .search input');
let searchButton = document.querySelector('.gallery .search button');


searchButton.addEventListener('click', function() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState === 4 && httpRequest.status === 200) {
            let pictures = JSON.parse(httpRequest.response);
            console.log(pictures);
            for(let i = 0; i < 24; i++) {
                let images = document.createElement('img');
                images.setAttribute('src', pictures.data[i].images.downsized_still.url);
                div.appendChild(images);
                images.addEventListener('click', function(){
                    images.setAttribute('src', pictures.data[i].images.downsized_medium.url);
                })
            }
        }
    }
    httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q='+searchData.value+'&api_key=dc6zaTOxFJmzC');
    httpRequest.send();
})