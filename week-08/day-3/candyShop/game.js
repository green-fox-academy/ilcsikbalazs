var candies = document.querySelector('.candies');
var candyButton = document.querySelector('.create-candies');
var lollypops = document.querySelector('.lollypops')
var buyLollypop = document.querySelector('.buy-lollypops');
var speed = document.querySelector('.speed');
var makeItRain = document.querySelector('.candy-machine');

function addCandy() {
    candies.textContent++;
    callback();
}

candyButton.addEventListener('click', function(){
    addCandy();
})

buyLollypop.addEventListener('click', function(){
    if (candies.textContent >= 10) {
        candies.textContent -= 10;
        lollypops.textContent += '🍭';
        var numberOfLollypops = lollypops.textContent.length/2;
    }
    if (numberOfLollypops/10 >= 1) {
        speed.textContent = parseInt(numberOfLollypops/10);
    }
})

function callback() {
    var timer = setTimeout(addCandy, 5000);
}

// makeItRain.addEventListener('click', )