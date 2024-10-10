const http = require('http');

const inputData = {
  "organizationalUnits": [],
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (inputData['organizationalUnits'].length > 0) {
      res.end(JSON.stringify({id: inputData['organizationalUnits'].pop().id}));
      return;
    }

    res.end(JSON.stringify({ id: null }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

// Start the server on port 6969
const PORT = 6969;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});