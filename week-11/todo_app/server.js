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
})

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
})



app.listen(8080, function() {
    console.log('Server started');
});