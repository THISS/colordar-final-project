const express = require('express');
const router = express.Router();

module.exports = (db, log) => {
  
  const errorHandler = (error, res) => {
    log.error(error);
    res.json({ error: 'something funky went down' });
  };

  router.get('/',(req, res) => {
    const calId = Number(req.query.calid);
    
    const isMaster = req.query.ismaster;
    const userId = 1; // TODO: add the users id here
    const responseObj = {};

    if (isMaster) {
      // Pass in the user id
      db.getMasterCalendarEvents(userId)
      .then((queryResponse) => {
        responseObj.events = queryResponse;
        return db.getUsersCalendars(userId)
      })
      .then((queryResponse) => {
        responseObj.calendars = queryResponse;
        res.json(responseObj);
      })
      .catch((error) => {
        errorHandler(error, res);
      });

      // TODO: make a pagination for the above query
    }else {
      db.getAllCalendarEvents(calId)
        .then((queryResponse) => {
          responseObj.events = queryResponse;
          res.json(responseObj);
        })
        .catch((error) => {
          errorHandler(error, res);
      });
    }
  });

  router.post('/', (req, res) => {
    const eventInput = req.body;
    
    db.addEvent(eventInput)
      .then((queryResponse) => {
        res.json(queryResponse[0]);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.get('/:id', (req, res) => {
    const eventId = req.params.id;
    if (!eventId) {
      errorHandler('no eventId given', res);
    }

    db.getEventById(eventId)
      .then((queryResponse) => {
        res.json(queryResponse);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.put('/:id/edit', (req, res) => {
    const eventId = req.params.id;
    if (!eventId) {
      errorHandler('no eventId given', res);
    }
    
    const eventObj = req.body;

    db.updateEvent(eventId, eventObj)
      .then((queryResponse) => {
        // queryResponse return an array of updated rows - we just changed 1
        res.json(queryResponse[0]);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.delete('/', (req, res) => {
    const eventId = Number(req.body.id);
    if (!eventId) {
      errorHandler('no eventId given', res);
    }
    db.deleteEvent(eventId)
      .then((success) => {
        res.json({deleted: true, id: eventId});
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  })

  return router;
}