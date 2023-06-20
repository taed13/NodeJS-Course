var http = require('http');
var currentDate = require('./getCurrentDate');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + currentDate.currentDate());
    res.end();
}).listen(8080);

