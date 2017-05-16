'use strict';

const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    app.use('/assets/', express.static('assets'));
});

app.get('/doubling', function(req, res) {
    let input = parseInt(req.query.input);
    if(input > 0) {
        res.send({
            received: input,
            result: input * 2
        });
    } else {
        res.send({
            error: 'Please provide an input!'
        });
    }
});

app.get('/greeter', function(req, res) {
    let inputName = req.query.name;
    let inputTitle = req.query.title;
    if(inputName === undefined || inputTitle === undefined) {
        res.send({
            error: 'Please provide a name!'
        });
    } else {
        res.send({
            welcome_message: "Oh, hi there petike, my dear student!"
        })
    }
});

app.get('/appenda/:appendable', function(req, res) {
    let input = req.params.appendable;
    if(input === undefined) {
        res.status(404).send();
    } else {
        res.send({
            appended: input + "a"
        })
    }
});

function Sum(number) {
    let sumOfNumbers = 0;
    for(let i = 0; i <= number; i++) {
        sumOfNumbers += i;
    }
    return sumOfNumbers;
}

function Factor(number) {
    let factOfNumbers = 1;
    for(let i = 1; i <= number; i++) {
        factOfNumbers = factOfNumbers * i;
    }
    return factOfNumbers;
}

app.post('/dountil/:what', function(req, res) {
    let input = req.params.what;
    let body = req.body.until;
    console.log(input);
    if(input === 'sum') {
        res.send({
            result: Sum(body)
        });
    } else if (input === 'factor') {
        res.send({
            result: Factor(body)
        });
    }
})

app.listen(8080);