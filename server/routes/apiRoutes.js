const express = require('express');
const router = express.Router();

// route middleware to indicate whether user is logged in or not
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  console.log('authenticated', req.isAuthenticated());
  
  if (req.isAuthenticated()) {
    res.locals.loggedIn = true;
  }else {
    // if they aren't redirect them to the home page
    res.locals.loggedIn = false;
    res.json(res.locals);
    return;
  }
  return next();
}

module.exports = function(dbHelpers, passport, logger) {
  // Gather the api routers
  const users = require('./_usersApi')(dbHelpers.users, passport, logger, isLoggedIn);

  const calendars = require('./_calendarsApi')(dbHelpers, logger);
  const groups = require('./_groupsApi')(dbHelpers, logger);
  const events = require('./_eventsApi')(dbHelpers.events, logger);
  
  // Mount the Routes on Api
  router.use('/users', users);

  router.use(isLoggedIn);
  router.use('/calendars', calendars);
  router.use('/groups', groups);
  router.use('/events', events);


  return router;
}