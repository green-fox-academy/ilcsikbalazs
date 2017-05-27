let express = require('express');
let cors = require('cors');
let mysql = require('mysql');
let bodyParser = require('body-parser');

let app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/assets/', express.static('assets'));

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'todo'
});

conn.connect(function(err){
  if(err){
    console.log("Error connecting to Db", console.log(err.toString()));
    return;
  }
  console.log("Connection established");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/list', function(req, res) {
    let respond = [];
    conn.query('SELECT * FROM todo_list', function(err, rows) {
        rows.forEach(function(row) {
            respond.push({
                "id": row.id,
                "completed": row.completed,
                "text": row.text
            });
        });
        res.send(respond);
    })
});

app.post('/list', function(req, res) {
    let text = req.body.text;
    conn.query('INSERT INTO todo_list (text) VALUES (?)', [text], function(err, rows) {
        if(err) {
            console.log('POST new list: ' + err.message);
            return;
        }
        res.send();
    })

    res.send();
});

app.delete('/list/:id', function(req, res) {
    let id = req.params.id;
    conn.query('DELETE FROM todo_list WHERE id = ?', [id], function(err, rows) {
        if(err) {
            console.log('DELETE from list: ' + err.message);
            return; 
        }
        res.send();
    });
});

// UPDATE [table] SET [column] = '[updated-value]' WHERE [column] = [value];
app.put('/list/:id', function(req, res) {
    let completed = req.body.completed;
    let id = req.params.id;
    conn.query('UPDATE todo_list SET completed = ? WHERE id = ?', [completed, id], function(err, rows) {
        if(err) {
            console.log('UPDATE list: ' + err.message);
            return; 
        }
        res.send();
    });
});

app.listen(8080, function() {
    console.log('Server started');
});