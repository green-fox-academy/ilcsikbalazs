'use strict';

const express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req, res) {
    res.send()
})

app.listen(3000);