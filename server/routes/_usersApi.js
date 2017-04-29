const express = require('express');
const router = express.Router();

module.exports = function(db) {
  
  router.get('/',(req, res) => {
    res.send('in the usersApi');
    console.log('in the usersApi get /');
  });

  return router;
}