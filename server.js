const http = require('http');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const server = http.createServer((request, response) => {
  const requested = decodeURIComponent(request.url === '/' ? '/index.html' : request.url);
  const filePath = path.join(root, requested);
  fs.createReadStream(filePath)
    .on('error', () => {
      response.statusCode = 404;
      response.end('File not found');
    })
    .pipe(response);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Campus Exchange running at http://localhost:3000');
});

