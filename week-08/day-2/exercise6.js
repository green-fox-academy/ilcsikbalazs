// We should know about each sharpie their color (which should be a string), 
//  width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount by the width

var sharpie = {
    color: '',
    width: 0,
    inkAmount: 100,
    use: function() {
        this.inkAmount -= this.width;
    },
    set: function(color, width) {
        this.color = color;
        this.width = width
    }
}

sharpie.set('pink', 20);
sharpie.use();
console.log(sharpie);