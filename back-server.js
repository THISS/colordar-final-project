'use strict';

const ENV = process.env.NODE_ENV || 'development';
if (ENV !== 'production') {
  require('dotenv').config();
}
const path = require('path');

const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
// const io = require('socket.io')(server);

const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

const Winston = require('winston');
const winstonConfig = require('./config/winstonconfig');
const logger = new Winston.Logger(winstonConfig(Winston));

const knexConfig = require('./config/knexfile.js');
const knex = require('knex')(knexConfig[ENV]);

// Inject our knex into dbhelpers
const dbHelpers = require('./server/db/helpers')(knex, logger);
const passport = require('passport');
require('./config/passportconfig')(passport, dbHelpers, logger);

// Where our socket event handlers are registered
// const socketEvents = require('./server/lib/socket/events')(io, logger);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/server/views');

// Middleware
if (ENV !== 'production') {
  // Dev only
  const knexLogger  = require('knex-logger');
  app.use(knexLogger(knex));
}

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'this',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// app.use(express.static(__dirname + 'client/public'));

// Routes
// Load the routers with the dbHelpers where needed
const apiRoutes = require('./server/routes/apiRoutes')(dbHelpers, passport, logger);

// Mount the routers
app.use('/api', apiRoutes);

// Our catch all that will send the index file to client - TODO:can change to 404 at some point
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/public/index.html'));
// });

server.listen(PORT, () => {
  console.log(`Colordar is Online: on port ${server.address().port}`);
})