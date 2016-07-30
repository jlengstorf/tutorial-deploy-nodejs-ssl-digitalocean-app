'use strict';

// We're setting up an extremely simple server here.
const http = require('http');

// These could (should) be set as env vars.
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

// No matter what hits the server, we send the same thing.
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>I’m a Node app!</h1><p>I’m secure!</p>');
}).listen(port, host);

console.log(`App running at http://${host}:${port}`);
