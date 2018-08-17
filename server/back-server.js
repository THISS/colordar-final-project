"use strict";
const ENV = process.env.NODE_ENV || "development";
if (ENV !== "production") {
  require("dotenv").config();
}
const path = require("path");

const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const server = require("http").createServer(app);
// const io = require('socket.io')(server);

const bodyParser = require("body-parser");
const session = require("express-session");

const Winston = require("winston");
const winstonConfig = require("../config/winstonconfig");
const logger = Winston.createLogger(winstonConfig(Winston));

const knexConfig = require("../knexfile.js");
const knex = require("knex")(knexConfig[ENV]);

// Inject our knex into dbhelpers
const dbHelpers = require("./db/helpers")(knex, logger);
const passport = require("passport");
require("../config/passportconfig")(passport, dbHelpers, logger);

// Where our socket event handlers are registered
// const socketEvents = require('./server/lib/socket/events')(io, logger);

// Middleware
if (ENV !== "production") {
  // Dev only
  const knexLogger = require("knex-logger");
  app.use(knexLogger(knex));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "this",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
// Load the routers with the dbHelpers where needed
const apiRoutes = require("./routes/apiRoutes")(dbHelpers, passport, logger);

// Mount the routers
app.use("/api", apiRoutes);

// error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  logger.error(err);
  res.json({ error: err });
});

app.use((req, res) => {
  logger.warn(`Could not find route ${req.url}`);
  res.status(400);
  res.json({ error: "Can't find that, sorry" });
});

server.listen(PORT, () => {
  logger.info(`Colordar is Online: on port ${server.address().port}`);
});
