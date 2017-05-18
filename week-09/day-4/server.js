'use strict';
const mysql = require('mysql');
const express = require('express');

let app = express();

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'bookstore'
});

app.get('/', function(req, res) {
    // res.sendFile(__dirname + '/index.html');
    // app.use('/assets/', express.static('assets'));
    res.send('KEK');
});

app.get('/booknames', function(req, res) {
    let result = "<ul>";
    conn.query("SELECT * FROM book_mast", function(err, rows) {
        console.log("Data received from book_mast table\n");
        if(err) {
            console.log("/book titles ERROR");
        } else {
            rows.forEach(function(row) {
                result += '<li>' + row.book_name + '</li>';
            });
        }
        result += '</ul>';
        res.send(result);
    })
})

app.get('/allbooks', function(req, res) {
    let queryPublisher = req.query.publisher;
    let queryCategory = req.query.category;
    let queryPriceLow = req.query.plt;
    let queryPriceGreat = req.query.pgt;

    let result = "<table>";
    let querySQL = "SELECT * FROM book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id INNER JOIN category ON category.cate_id = book_mast.cate_id INNER JOIN publisher ON publisher.pub_id = book_mast.pub_id" 
    
    if(queryPublisher != undefined || queryCategory != undefined || queryPriceLow != undefined || queryPriceGreat != undefined) {
        console.log('Load query');
        querySQL += ' WHERE';
        if(queryPublisher) {
            querySQL += " pub_name = '" + queryPublisher + "'" + " AND";
        } if(queryCategory) {
            querySQL += " cate_descrip = '" + queryCategory + "'" + " AND";
        } if(queryPriceLow) {
            querySQL += " book_price < '" + queryPriceLow + "'" + " AND";
        } if(queryPriceGreat) {
            querySQL += " book_price > '" + queryPriceGreat + "'" + " AND";
        }
    }
    querySQL = querySQL.slice(0, -4);
    console.log(querySQL);

    conn.query(querySQL, function(err, rows) {
        console.log("Data received from allbooks\n");
        if(err) {
            console.log('/allbooks ERROR', err);
        } else {
            console.log('Load allbook table');
            result += '<tr>';
            result += '<th>' + 'Author name' + '</th>';
            result += '<th>' + 'Book name' + '</th>';
            result += '<th>' + 'Category' + '</th>';
            result += '<th>' + 'Publisher name' + '</th>';
            result += '<th>' + 'Price' + '</th>';
            result += '</tr>';
            rows.forEach(function(row) {
                result += '<tr>';
                result += '<td>' + row.aut_name + '</td>';
                result += '<td>' + row.book_name + '</td>';
                result += '<td>' + row.cate_descrip + '</td>';
                result += '<td>' + row.pub_name + '</td>';
                result += '<td>' + row.book_price + '</td>';
                result += '</tr>';
            });
        }
        result += '</table>';
        res.send(result);
    });
});

app.listen(8080, function() {
    console.log('Server is running...')
});