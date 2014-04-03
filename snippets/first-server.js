// server.js

var express = require('express');

var app = express();
app.use(express.logger('dev'));

app.listen( NUMERO_DE_PORTA ); // escolha aleatoriamente um numero de porta entre 1024 e 65535