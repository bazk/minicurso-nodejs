// demonstração async parallel read/write

var fs = require('fs');

var timeBegin = new Date().getTime();

// gera nome de arquivo aleatório
var arquivo = '/tmp/lixo-' + Math.floor((Math.random()*100000)+1) + '.txt';

// buffer para escrita no arquivo acima
var buffer = '';


fs.readFile('/usr/bin/who', function(err, data) {
    if (err) {
        throw err;
    }

    var timeEnd = new Date().getTime();
    console.log('fim read 1 @ ' + (timeEnd - timeBegin));

    // concatena conteudo do arquivo lido no buffer
    buffer += data;

    fs.readFile('/usr/bin/wc', function(err, data) {
        if (err) {
            throw err;
        }

        var timeEnd = new Date().getTime();
        console.log('fim read 2 @ ' + (timeEnd - timeBegin));

        // concatena conteudo do arquivo lido no buffer
        buffer += data;

        fs.writeFile(arquivo, buffer, function(err) {
            if (err) {
                throw err;
            }

            var timeEnd = new Date().getTime();
            console.log('fim write 3 @ ' + (timeEnd - timeBegin));
        });
    });
});

var timeEnd = new Date().getTime();
console.log('fim main @ ' + (timeEnd - timeBegin));