const express = require('express');
const router = express.Router();

module.exports = (db, log) => {
  
  const errorHandler = (error, res) => {
    log.error(error);
    return res.json({ error: 'something funky went down' });
  };

  router.get('/', (req, res) => {
    const calId = req.query.calid;
    
    const isMaster = !calId;
    const userId = req.user.id;
    const responseObj = {};

    if (isMaster) {
      // Pass in the user id
      db.getMasterCalendarEvents(userId)
      .then(queryResponse => {
        responseObj.events = queryResponse;
        return db.getUsersCalendars(userId);
      })
      .then(queryResponse => {
        responseObj.calendars = queryResponse;
        return res.json(responseObj);
      })
      .catch(error => {
        errorHandler(error, res);
      });

      // TODO: make a pagination for the above query
    }else {
      db.getAllCalendarEvents(calId, userId)
        .then(queryResponse => {
          responseObj.events = queryResponse || [];
          return res.json(responseObj);
        })
        .catch(error => {
          return errorHandler(error, res);
        });
    }
  });

  router.post('/', (req, res) => {
    const eventInput = req.body;

    // TODO: remove these when sending to server for reals
    let start = new Date("2018/09/03 10:00");
    let end = new Date("2018/09/03 11:00");

    eventInput.start_time = eventInput.start_time !== "now plus one day" ? eventInput.start_time : start;
    eventInput.end_time = eventInput.end_time !== "start_time plus one hour" ? eventInput.end_time : end;
    
    eventInput.owner_id = req.user.id;

    db.addEvent(eventInput)
      .then(queryResponse => {
        return res.json(queryResponse[0]);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  router.get('/:id', (req, res) => {
    const eventId = req.params.id;
    if (!eventId) {
      errorHandler('no eventId given', res);
    }

    const userId = req.user.id;

    db.getEventById(eventId, userId)
      .then(queryResponse => {
        return res.json(queryResponse);
      })
      .catch(error => {
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
      .then(queryResponse => {
        // queryResponse return an array of updated rows - we just changed 1
        return res.json(queryResponse[0]);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  router.delete('/:id', (req, res) => {
    const eventId = req.params.id;
    if (!eventId) {
      errorHandler('no eventId given', res);
    }
    const userId = req.user.id;

    db.deleteEvent(eventId, userId)
      .then(success => {
        return res.json({ deleted: true, id: eventId });
      })
      .catch(error => {
        errorHandler(error, res);
      });
  })

  return router;
}