const express = require('express');
const router = express.Router();

module.exports = function(dbHelpers) {
  // Gather the api routers
  const users = require('./_usersApi')(dbHelpers.users);
  const calendars = require('./_calendarsApi')(dbHelpers);
  const groups = require('./_groupsApi')(dbHelpers.groups);
  const events = require('./_eventsApi')(dbHelpers.events);
  
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