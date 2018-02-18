const express = require('express');
const router = express.Router();

module.exports = function(db, log) {
  const errorHandler = (error, res) => {
    log.error(error);
    res.json({error: 'something funky went down'});
  };
  
  router.get('/',(req, res) => {
    const userId = 2; // TODO: convert
    const responseObj = {};
    
    db.calendars.getAllCalendars(userId)
      .then((queryResponse) => {
        responseObj.calendars = queryResponse;
        res.json(responseObj);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.post('/', (req, res) => {
    const userId = 2; // TODO:
    const responseObj = {};

    const calendarInput =  req.body;
    calendarInput.owner_id = userId;

    db.calendars.addCalendar(calendarInput)
      .then((queryResponse) => {
        responseObj.calendars = queryResponse[0];
        return db.calendars.linkMaster(userId, queryResponse[0].id)
      })
      .then((queryResponse) => {
        res.json(responseObj);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.get('/:id', (req, res) => {
    const calendarId = req.params.id;
    const userId = 2; // TODO: update
    const responseObj = {};
    if (!calendarId) {
      errorHandler('no calendarId given', res);
    }
    if (calendarId === 'master') {
      db.events.getMasterCalendarEvents(userId)
        .then((queryResponse) => {
          Object.assign(responseObj, {
            id: calendarId,
            name: 'Master',
            events: queryResponse
          });
          res.json(responseObj);
        })
        .catch((error) => {
          errorHandler(error, res);
        });
    }else {
      db.calendars.getCalendarById(calendarId)
        .then((queryResponse) => {
          Object.assign(responseObj, {
            id: queryResponse.id,
            name: queryResponse.name,
            color_id: queryResponse.color_id,
          });
          return db.events.getAllCalendarEvents(calendarId);
        })
        .then((queryResponse) => {
          Object.assign(responseObj, {
            events: queryResponse
          });
          res.json(responseObj);
        })
        .catch((error) => {
          errorHandler(error, res);
        });
    }
  });

  router.put('/:id/edit', (req, res) => {
    const calendarId = req.params.id;
    const calendarInput =  req.body;

    db.calendars.updateCalendar(calendarId, calendarInput)
      .then((queryResponse) => {
        res.json(queryResponse[0]);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });



  return router;
}