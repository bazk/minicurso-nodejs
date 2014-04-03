// server.js

var express = require('express');

var app = express();
app.use(express.logger('dev'));

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen( NUMERO_DE_PORTA );