const url = require('url');
const http = require('http');
// Inside the request handler

const server = http.createServer((req, res) => {
    // Request handling logic goes here
    
const parsedUrl = url.parse(req.url, true);
const path = parsedUrl.pathname;
const query = parsedUrl.query;
// Inside the request handler
if (path === '/weather') {
    // Handle the '/users' endpoint
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('I am a the user');
  } else {
    // Handle unknown endpoints
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Error 404');
  }
 });
 server.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });