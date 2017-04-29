const express = require('express');
const router = express.Router();

module.exports = function(dbHelpers) {
  
  router.get('/',(req, res) => {
    res.send('in the groupsApi');
    console.log('in the groupsApi get /');
  });

  return router;
}