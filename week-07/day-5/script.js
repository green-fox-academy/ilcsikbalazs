'use strict';

var nameList = [
    {src : 'picLion.jpg',
    title : 'picLion',}, 
    {src : 'pic1.jpeg',
    title : 'pic1'}, 
    {src : 'pic2.jpeg',
    title : 'pic2'}, 
    {src : 'pic3.jpeg',
    title : 'pic3'}, 
    {src : 'pic4.jpeg',
    title : 'pic4'}, 
    {src : 'pic5.jpeg',
    title : 'pic5'},
    ];

var thumbnail = document.querySelector('.thumbnail');

var mainImg = document.createElement('img');
mainImg.className = 'mainImg';
mainImg.setAttribute('src', 'picLion.jpg');

nameList.forEach(function(element) {
    var images = document.createElement('img');
    images.setAttribute('src', element.src);
    images.className = element.title;
    thumbnail.appendChild(images);
    images.addEventListener('click', function() {
        mainImg.setAttribute('src', element.src);
    })
});

var buttonLeft = document.createElement('button');
buttonLeft.textContent = '<';

var buttonRight = document.createElement('button');
buttonRight.textContent = '>';

var container = document.querySelector('.container');
container.appendChild(buttonLeft);
container.appendChild(mainImg);
container.appendChild(buttonRight);

function currentElement() {
    var currentImg = mainImg.getAttribute('src');
    for (var i = 0; i < nameList.length; i++) {
        if (nameList[i].src === currentImg) {
            return i;
        }
    }
}

buttonRight.addEventListener('click', function(){
    if (currentElement() < nameList.length-1) {
        mainImg.setAttribute('src', nameList[currentElement()+1].src);
    } else if (currentElement() === nameList.length-1) {
        mainImg.setAttribute('src', nameList[0].src);
    }
});

buttonLeft.addEventListener('click', function(){
    if (currentElement() > 0) {
        mainImg.setAttribute('src', nameList[currentElement()-1].src);
    } else if (currentElement() === 0) {
        mainImg.setAttribute('src', nameList[nameList.length-1].src);
    }
});