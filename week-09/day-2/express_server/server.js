//127.0.0.1:3000 or localhost:3000
'use strict';
// server request and response
// const http = require('http');
// let server = http.createServer(handleRequest);
// function handleRequest(request, response) {
//     console.log(request);
//     response.end('MIZU');
// }
// server.listen(3000);

//express

const express = require('express');

let app = express();
let five = {
    lol: 'lol',
    igen: 'nem'
};

//endpoints
app.get('/', function(req, res) {
    res.send('<h1>Ez itt a főoldal</h1>');
});

app.get('/five/:parameters', function(req, res) {
    console.log(req.query);
    let igen = req.params.parameters;
    let five = five[igen];
    res.send(five);
})

app.get('/', function(req, res) {
    res.send(five);
})

app.get('/object', function(req, res) {
    console.log(req.query);
    res.send({
        name: "Foo",
        age:21,
        banon: req.query.banon
    })
})


app.listen(3000);