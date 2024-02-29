var http = require('http');
var dt = require('./export_eg.js');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

console.log(dt.myDateTime());
console.log(dt.name);