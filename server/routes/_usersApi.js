const express = require('express');
const router = express.Router();

module.exports = function(dbHelpers) {
  
  router.get('/',(req, res) => {
    res.send('in the usersApi');
    console.log('in the usersApi get /');
  });

  return router;
}