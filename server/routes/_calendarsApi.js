const express = require('express');
const router = express.Router();

module.exports = function(db) {
  
  router.get('/',(req, res) => {
    res.send('in the calendarsApi');
    console.log('in the calendarsApi get /');
  });

  return router;
}