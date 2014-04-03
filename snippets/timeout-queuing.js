// demonstração timeout queuing

var timeBegin = new Date().getTime();

setTimeout(function () {
    var timeEnd = new Date().getTime();
    console.log('timeout: ' + (timeEnd - timeBegin));
}, 100);

var i = 0;

while (i != 100000000) {
    i += 1;
}

console.log('resultado: ' + i);