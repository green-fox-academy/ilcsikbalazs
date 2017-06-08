'use strict';

let express = require('express');
let mysql = require('mysql');
let bodyParser = require('body-parser');

let app = express();

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'mp3player'
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db", console.log(err.toString()));
    return;
  }
  console.log("Connection established");
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    next();
});

app.use('/assets/', express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/playlists/', function(req, res) {
    let result = [];
    conn.query("SELECT id, playlist, system FROM playlists", function(err, rows) {
        console.log("Data received from playlists table\n");
        if(err) {
            console.log("ERROR");
        } else {
            rows.forEach(function(row) {
                result.push({ "id": row.id, "title": row.playlist, "system": row.system});
            });
        }
        res.send(result);
    });
});

app.get('/playlist-track/', function(req, res) {
    let result = [];
    conn.query("SELECT * FROM tracks GROUP BY title", function(err, rows) {
        console.log("Data received from tracks table\n");
        if(err) {
            console.log("ERROR");
        } else {
            rows.forEach(function(row) {
                result.push({ "id": row.id, "title": row.title, "artist": row.artist, "duration": row.duration, "path": row.path});
            });
        }
        res.send(result);
    });
});

app.post('/playlists/', function(req, res) {
    let playlist = req.body.playlist;
    conn.query('INSERT INTO playlists (playlist, system) VALUES (?, 1)', [playlist], function(err, rows) {
        if(err) {
            console.log(err.message);
            return;
        }
        res.send();
    })
})

app.post('/playlist-track/', function(req, res) {
    let playlistValue = req.body.playlist;
    let artistValue = req.body.artist;
    let titleValue = req.body.title;
    conn.query('SELECT * FROM tracks WHERE artist = ? AND title = ?', [artistValue, titleValue], function(err, rows) {
        if(err) {
            console.log('WRONG ARTIST OR TITLE VALUE ERROR: '+err.message);
            return;
        }
        let path = "";
        let title = 0;
        let artist = "";
        let duration = 0;
        rows.forEach(function(element) {
            path = element.path;
            title = element.title;
            artist = element.artist;
            duration = element.duration;
        });
        conn.query('SELECT id FROM playlists WHERE playlist = ?', [playlistValue], function(err, rows2) {
            if(err) {
                console.log('WRONG PLAYLIST_ID ERROR: '+err.message);
                return;
            }
            let playlist_id = "";
            rows2.forEach(function(element) {
                playlist_id = element.id;
            });
            conn.query('INSERT INTO tracks (path, playlist_id, title, artist, duration) VALUES (?, ?, ?, ?, ?)', [path, playlist_id, title, artist, duration], function(err, rows) {
                if(err) {
                    console.log('INSERT ERROR: '+err.message);
                    return;
                }
                res.send();
            });
        })
    });
});

app.post('/playlist-track-favourite/', function(req, res) {
    let titleValue = req.body.title;
    let artistValue = req.body.artist;
    conn.query('SELECT * FROM tracks WHERE artist = ? AND title = ?', [artistValue, titleValue], function(err, rows) {
        if(err) {
            console.log('WRONG ARTIST OR TITLE VALUE ERROR: '+err.message);
            return;
        }
        let path = "";
        let title = 0;
        let artist = "";
        let duration = 0;
        rows.forEach(function(element) {
            path = element.path;
            title = element.title;
            artist = element.artist;
            duration = element.duration;
        });
        conn.query('INSERT INTO tracks (path, playlist_id, title, artist, duration) VALUES (?, 2, ?, ?, ?)', [path, title, artist, duration], function(err, rows) {
            if(err) {
                console.log('INSERT ERROR: '+err.message);
                return;
            }
            res.send();
        });
    });
});

app.delete('/playlists/:id', function(req, res) {
    let id = req.params.id;
    conn.query('DELETE FROM playlists WHERE id = ?', [id], function(err, rows) {
        if(err) {
            console.log(err.message);
            return;
        }
        res.send();
    })
});

app.get('/playlists/selecttrack', function(req, res) {
    let selectplaylist = req.query;
    let result = [];
    conn.query('SELECT * FROM tracks INNER JOIN playlists ON playlists.id = tracks.playlist_id WHERE playlists.playlist = ?', [selectplaylist.name], function(err, rows) {
        if(err) {
            console.log("ERROR");
        } else {
            // rows.forEach(function(row) {
            //     result.push({ "id": row.id, "title": row.playlist, "system": row.system});
            // });
        }
        res.send(result);
    })
})

app.listen(3000, function() {
    console.log('Server is running...')
});