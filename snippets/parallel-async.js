// demonstração async parallel read/write

var fs = require('fs');

var timeBegin = new Date().getTime();

// gera nome de arquivo aleatório
var filename = '/tmp/lixo-' + Math.floor((Math.random()*100000)+1) + '.txt';

// buffer para escrita no arquivo acima
var buffer = 'teste escrita nodejs';


fs.readFile('/usr/bin/who', function(err, data) {
    if (err) {
        throw err;
    }

    var timeEnd = new Date().getTime();
    console.log('fim read 1 @ ' + (timeEnd - timeBegin));
});

fs.readFile('/usr/bin/wc', function(err, data) {
    if (err) {
        throw err;
    }

    var timeEnd = new Date().getTime();
    console.log('fim read 2 @ ' + (timeEnd - timeBegin));
});

fs.writeFile(filename, buffer, function(err, data) {
    if (err) {
        throw err;
    }

    var timeEnd = new Date().getTime();
    console.log('fim write 3 @ ' + (timeEnd - timeBegin));
});

var timeEnd = new Date().getTime();
console.log('fim main @ ' + (timeEnd - timeBegin));