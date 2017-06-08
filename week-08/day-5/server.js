'use strict';

const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'reddit'
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    next();
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db", console.log(err.toString()));
    return;
  }
  console.log("Connection established");
});


app.get('/posts', function(req, res) {
    conn.query('SELECT * FROM posts_table', function(err, rows) {
        if(err) {
            console.log(err.toString());
            return;
        }
        let respond = {
            'posts': rows
        }
        res.send(respond);
    });
});

app.post('/posts', function(req, res) {
    let titleValue = req.body.title;
    let hrefValue = req.body.href;
    conn.query("INSERT INTO posts_table (title, href, timestamp, score) VALUES ( ?, ?, ?, ?)", [titleValue, hrefValue, 0, 0], function(err, rows) {
        if(err) {
            console.log(err.toString());
            return;
        }
        res.send();
    });
});

app.delete('/posts/:id', function(req, res) {
    let idValue = req.params.id;
    conn.query('DELETE FROM posts_table WHERE id = ?', [parseInt(idValue)], function(err, rows) {
        if(err) {
            console.log(err.toString());
            return;
        }
        res.send();
    });
});

app.put('/posts/:id/upvote', function(req, res) {
    let idValue = req.params.id;
    conn.query('SELECT score FROM posts_table WHERE id = ?', [idValue],  function(err, rows) {
        if(err) {
            console.log(err.toString());
            return;
        }
        let scoreSet = 0;
        rows.forEach(function(row) {
            scoreSet = row.score;
        });
        scoreSet += 1;
        conn.query('UPDATE posts_table SET score = ? WHERE id = ?', [scoreSet, parseInt(idValue)], function(err, rows) {
            if(err) {
                console.log(err.toString());
                return;
            }
            res.send();
        });
    })
});

app.put('/posts/:id/downvote', function(req, res) {
    let idValue = req.params.id;
    conn.query('SELECT score FROM posts_table WHERE id = ?', [parseInt(idValue)],  function(err, rows) {
        if(err) {
            console.log(err.toString());
            return;
        }
        let scoreSet = 0;
        rows.forEach(function(row) {
            scoreSet = row.score;
        });
        scoreSet -= 1;
        conn.query('UPDATE posts_table SET score = ? WHERE id = ?', [scoreSet, parseInt(idValue)], function(err, rows) {
            if(err) {
                console.log(err.toString());
                return;
            }
            res.send();
        });
    })
});

app.put('/posts/:id', function(req, res) {
    let titleValue = req.body.title;
    let hrefValue = req.body.href;
    let idValue = req.params.id;
    conn.query('SELECT title, href FROM posts_table WHERE id = ?', [parseInt(idValue)],  function(err, rows) {
        if(err) {
            console.log(err.toString());
            return;
        }
        conn.query('UPDATE posts_table SET title = ?, href = ? WHERE id = ?', [titleValue, hrefValue, parseInt(idValue)], function(err, rows) {
            if(err) {
                console.log(err.toString());
                return;
            }
            res.send();
        });
    })
});

app.listen(3000, function() {
    console.log('Server is running...')
})