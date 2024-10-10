const http = require('http');

const inputData = {
  "organizationalUnits": [],
  "teams": [],
  "leagues": [],
  "seasons": [],
  "seasonTeams": [],
  "articles": [],
  "users": [],
  "rounds": [],
  "games": [],
  "gameEvents": [],
  "leaderboards": [],
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const keys = ['leaderboards', 'gameEvents', 'games', 'rounds', 'articles', 'seasonTeams', 'seasons', 'leagues', 'teams', 'organizationalUnits'];

    for (const key of keys) {
      if (inputData[key].length > 0) {
        res.end(JSON.stringify({ type: key, id: inputData[key].pop()['id'] }));
        return;
      }
    }

    res.end(JSON.stringify({ type: null, id: null }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

// Start the server on port 3000
const PORT = 6969;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});