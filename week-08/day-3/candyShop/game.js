var candies = document.querySelector('.candies');
var candyButton = document.querySelector('.create-candies');
var lollypops = document.querySelector('.lollypops')
var buyLollypop = document.querySelector('.buy-lollypops');
var speed = document.querySelector('.speed');
var makeItRain = document.querySelector('.candy-machine');
var speedContentInt = 0;
var numberOfLollypops = lollypops.textContent.length/2;

function addCandy() {
    var candiesNumber = parseInt(candies.textContent);
    candiesNumber++;
    candies.textContent = candiesNumber;
}

candyButton.addEventListener('click', function(){
    addCandy();
})

buyLollypop.addEventListener('click', function(){
    if (candies.textContent >= 10) {
        candies.textContent -= 10;
        lollypops.textContent += '🍭';
        numberOfLollypops = lollypops.textContent.length/2;
    }
    if (numberOfLollypops/10 >= 1) {
        speed.textContent = parseInt(numberOfLollypops/10);
        speedContentInt = parseInt(speed.textContent);
    }
})

setInterval(function() {
    if(speedContentInt >= 1) {
        var candiesNumber = parseInt(candies.textContent);
        candiesNumber += speedContentInt;
        candies.textContent = candiesNumber;
    }
}, 1000);

makeItRain.addEventListener('click', function(){
    if (numberOfLollypops >= 30) {
        lollypops.textContent = lollypops.textContent.substring(0, lollypops.textContent.length-60);
        numberOfLollypops = lollypops.textContent.length/2;
        speedContentInt = speedContentInt * 10;
        speed.textContent = speedContentInt;
        var candiesNumber = parseInt(candies.textContent);
        candiesNumber += speedContentInt;
        candies.textContent = candiesNumber;
        setTimeout(function () {
            speed.textContent = parseInt(numberOfLollypops/10);
            speedContentInt = parseInt(speed.textContent);
            speedContentInt = speedContentInt;
            speed.textContent = speedContentInt;
        }, 2000);
    }
})