const express = require('express');
const router = express.Router();

module.exports = function(db) {
  
  const errorHandler = (error, res) => {
    console.log(error);
    res.json({error: 'something funky went down'});
  };

  router.get('/',(req, res) => {
    const calId = req.query.calid;
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
    // Get the input from the body as JSON TODO:
    const eventInput = {
      name: 'darts at mine',
      location: 'my house',
      start_time: '2017-04-29T23:07:20.184Z',
      end_time: '2017-04-29T23:07:20.184Z',
      calendar_id: 2,
      color_id: 3
    };
    
    db.addEvent(eventInput)
      .then((queryResponse) => {
        res.json(queryResponse);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.get('/:id', (req, res) => {
    const eventId = req.params.id;

    db.getEventById(eventId)
      .then((queryResponse) => {
        res.json(queryResponse);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.put('/:id', (req, res) => {
    const eventId = req.params.id;
    // TODO: replace with body of PUT
    const eventObj = {
      name: 'Play pool',
      location: 'Johns Place',
      start_time: '2017-04-29T23:07:20.184Z',
      end_time: '2017-04-29T23:07:20.184Z',
      calendar_id: 2,
      color_id: 2
    };

    db.updateEvent(eventId, eventObj)
      .then((queryResponse) => {
        // queryResponse return an array of updated rows - we just changed 1
        res.json(queryResponse[0]);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.delete('/:id', (req, res) => {
    const eventId = req.params.id;
    db.deleteEvent(eventId)
      .then((success) => {
        res.json({deleted: true});
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  })

  return router;
}