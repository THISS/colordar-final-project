const express = require('express');
const router = express.Router();

module.exports = function(dbHelpers) {
  
  router.get('/',(req, res) => {
    res.send('in the eventsApi');
    console.log('in the eventsApi get /');
  });

  return router;
}