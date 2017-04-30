'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const ENV = process.env.NODE_ENV || 'development';
const path = require('path');

const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const Winston = require('winston');
const winstonConfig = require('./winstonconfig');
const logger = new Winston.Logger(winstonConfig(Winston));

const knexConfig = require('./knexfile.js');
const knex = require('knex')(knexConfig[ENV]);


// Middleware

app.use(express.static('client/public'));

// Inject our knex into dbhelpers
const dbHelpers = require('./server/db/helpers')(knex);

// Routes
// Load the routers with the dbHelpers where needed
const apiRoutes = require('./server/routes/apiRoutes')(dbHelpers);

// Mount the routers
app.use('/api', apiRoutes);

// Our catch all that will send the index file to client - TODO:can change to 404 at some point
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/public/index.html'));
});

server.listen(PORT, () => {
  console.log(`Colordar is Online: https://colordar.herokuapp.com on port ${server.address().port}`);
})