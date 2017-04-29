const express = require('express');
const router = express.Router();

module.exports = function(dbHelpers) {
  // Gather the api routers
  const users = require('./_usersApi')(dbHelpers);
  const calendars = require('./_calendarsApi')(dbHelpers);
  const groups = require('./_groupsApi')(dbHelpers);
  const events = require('./_eventsApi')(dbHelpers);
  
  // Mount the Routes on Api
  router.use('/users', users);
  router.use('/calendars', calendars);
  router.use('/groups', groups);
  router.use('/events', events);

  router.get('/', (req, res) => {
    res.json({error: 'address not found'});
  })

  return router;
}