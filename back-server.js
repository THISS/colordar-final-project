'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const ENV = process.env.NODE_ENV || 'development';

const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const Winston = require('winston');
const winstonConfig = require('./winstonconfig');
const logger = new Winston.Logger(winstonConfig(Winston));

const knexConfig = require('./knexfile.js');
const knex = require('knex')(knexConfig[ENV]);

app.use(express.static('client/public'));
// Middleware

app.get('/dbase', (req, res) => {
  knex.select().from('users')
    .then(function(rows) {
      res.send(rows);
    })
    .catch(function(err) {
      console.log(err);
    });
});

// TODO: inject our knex into dbhelpers

// TODO: inject dbhelpers into our routes

// TODO: Create a users route

// TODO: Create a Calendars route

// TODO: Create a Groups route

// TODO: Create a Events route

server.listen(PORT, () => {
  console.log(`Colordar is Online: https://colordar.herokuapp.com on port ${server.address().port}`);
})