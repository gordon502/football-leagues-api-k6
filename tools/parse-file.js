const fs = require('fs');
const path = require('path');

// Input file path (change this to your input file)
const inputFilePath = path.join(__dirname, 'results/create-test-stderr.txt');
// Output file path
const outputFilePath = path.join(__dirname, 'output.json');

// Function to read and parse the input file
const parseFile = () => {
  // Read the file line by line
  const lines = fs.readFileSync(inputFilePath, 'utf-8').split('\n');
  const result = {};

  // Process each line
  lines.forEach(line => {
    if (line.trim()) { // Ignore empty lines
      const parts = line.split(' || ');
      const key = parts[0].trim(); // First part as key
      const jsonString = parts[1].trim(); // Second part as JSON string

      try {
        // Parse JSON string
        const jsonObject = JSON.parse(jsonString);

        // Initialize the key in the result object if it doesn't exist
        if (!result[key]) {
          result[key] = [];
        }

        // Push the parsed object into the array for that key
        result[key].push(jsonObject);
      } catch (error) {
        console.error(`Error parsing JSON for key "${key}": ${error.message}`);
        console.log(`JSON string: ${jsonString}`);
        process.exit();
      }
    }
  });

  // Write the result object to a JSON file
  fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`Output written to ${outputFilePath}`);
};

// Execute the function
parseFile();