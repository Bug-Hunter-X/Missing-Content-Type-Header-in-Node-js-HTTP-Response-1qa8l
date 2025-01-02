const http = require('http');

const server = http.createServer((req, res) => {
  // Setting Content-Type is crucial for proper client-side handling.
  res.setHeader('Content-Type', 'text/plain'); // or 'text/html', 'application/json', etc.
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});