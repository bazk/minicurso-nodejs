// demonstração timeout

var timeBegin = new Date().getTime();

setTimeout(function () {
    var timeEnd = new Date().getTime();
    console.log('timeout: ' + (timeEnd - timeBegin));
}, 100);