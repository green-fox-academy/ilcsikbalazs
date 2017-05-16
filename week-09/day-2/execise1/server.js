'use strict';

const express = require('express');
let app = express();

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



app.listen(8080);