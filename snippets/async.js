// demonstração async read

var fs = require('fs');

var timeBegin = new Date().getTime();

fs.readFile('/usr/bin/who', function(err, data) {
    if (err) {
        throw err;
    }

    var timeEnd = new Date().getTime();
    console.log('fim read @ ' + (timeEnd - timeBegin));
});

var timeEnd = new Date().getTime();
console.log('fim main @ ' + (timeEnd - timeBegin));