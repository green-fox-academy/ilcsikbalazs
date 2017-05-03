'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer () {
    var values = [];
    for(var key in arguments) {
        var value = arguments[key];
        values.push(value)
    }
    console.log(values);
}

printer(1,2,3,4,5,6)