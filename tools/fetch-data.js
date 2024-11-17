import fetch from 'node-fetch';
import fs from 'fs';

// Define the API endpoints
const endpoints = {
  // articles: '/api/articles',
  // games: '/api/games',
  // gameEvents: '/api/game-events',
  // leaderboards: '/api/leaderboards',
  // leagues: '/api/leagues',
  organizationalUnits: '/api/organizational-units',
  // seasons: '/api/seasons',
  // seasonTeams: '/api/season-teams',
  // rounds: '/api/rounds',
  // teams: '/api/teams',
  // users: '/api/users',
};

// Function to fetch data from a given endpoint
async function fetchData(endpoint) {
  const response = await fetch(`http://18.192.61.31${endpoint}?limit=1000000`);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${endpoint}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.data; // Assuming the JSON structure has a key "data"
}

// Main function to fetch all data and save it to a JSON file
async function main() {
  const results = {};
  try {
    for (const [key, endpoint] of Object.entries(endpoints)) {
      results[key] = await fetchData(endpoint);
    }

    // Write the results to a JSON file
    fs.writeFileSync('results.json', JSON.stringify(results, null, 2), 'utf-8');
    console.log('Data has been written to results.json');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Execute the main function
main();