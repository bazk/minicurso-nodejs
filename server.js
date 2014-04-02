#!/usr/bin/env node

var connect = require('connect');

server = connect.createServer(
    connect.logger(),
    connect.static(__dirname)
);

server.listen(8000);
