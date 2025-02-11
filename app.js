// Setup
const express = require('express');

// Activates app as an express application
const app = express();

// Starts web server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Create an API using routes
app.get("/hello", (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

app.get("/goodbye", (req, res) => {
  res.send("<h1>Goodbye Express!</h1>");
});