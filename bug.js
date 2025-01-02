const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting Content-Type, the response may be interpreted incorrectly by the client.
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});