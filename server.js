var mysql = require('mysql');
var express = require('express');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Iceman1632',
  database : 'ioweu'
});
 
connection.connect(function() {
    console.log(arguments);
});

var app = express();

app.get('/', function(req, res) {

    res.end('hello');

});

app.get('/api/users', function(req, res) {

    connection.query('SELECT * from users u', function (error, results, fields) {

        if (error) throw error;

        res.end(JSON.stringify(results));

    });
});

app.listen('8080');
