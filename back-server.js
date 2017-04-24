'use strict';
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.set('viewengine', 'ejs');
/* Uncomment when testing live version */
// app.use(express.static('client/public'));
// Middleware

app.get('/', (req, res) => {
  res.send('Hey there');
});
// TODO: inject our knex into dbhelpers

// TODO: inject dbhelpers into our routes

// TODO: Create a users route

// TODO: Create a Calendars route

// TODO: Create a Groups route

// TODO: Create a Events route

server.listen(PORT, () => {
  console.log(`Colordar is Online: http://localhost on port ${server.address().port}`);
})