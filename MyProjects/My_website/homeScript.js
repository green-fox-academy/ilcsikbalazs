
var idhome = document.querySelector('#idhome');
var idcontact = document.querySelector('#idcontact');
var idcv = document.querySelector('#idcv');
var idgallery = document.querySelector('#idgallery');

idhome.addEventListener('click', function(){
    var visible = document.querySelector('.visible');
    visible.setAttribute('class', 'unvisible');
    var home = document.querySelector('.home');
    if (home.parentNode.getAttribute('class') === 'unvisible'){
        home.parentNode.setAttribute('class', 'visible');
    }
})

idcontact.addEventListener('click', function(){
    var visible = document.querySelector('.visible');
    visible.setAttribute('class', 'unvisible');
    var contact = document.querySelector('.contact');
    if (contact.parentNode.getAttribute('class') === 'unvisible'){
        contact.parentNode.setAttribute('class', 'visible');
    }
})
