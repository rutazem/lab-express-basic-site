// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// cat route:
app.get('/outside', (request, response, next) => response.sendFile(__dirname + '/views/outside-page.html'));




// Server Started
app.listen(2900, () => console.log('My first app listening on port 2900!'));