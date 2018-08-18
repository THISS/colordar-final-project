const express = require("express");
const router = express.Router();
const isLoggedIn = require("../lib/auth/auth");

module.exports = (dbHelpers, passport, logger) => {
  const isUserLoggedIn = isLoggedIn(logger);
  // Gather the api routers
  const users = require("./_usersApi")(
    dbHelpers.users,
    passport,
    logger,
    isUserLoggedIn
  );

  const calendars = require("./_calendarsApi")(dbHelpers, logger);
  const groups = require("./_groupsApi")(dbHelpers, logger);
  const events = require("./_eventsApi")(dbHelpers.events, logger);

  // unprotected routes
  router.use("/users", users);

  // middleware
  router.use(isUserLoggedIn);

  // protected routes
  router.use("/calendars", calendars);
  router.use("/groups", groups);
  router.use("/events", events);

  return router;
};
