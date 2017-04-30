const express = require('express');
const router = express.Router();

module.exports = function(db) {
  const errorHandler = (error, res) => {
    console.log(error);
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
    const userId = 1; // TODO:
    const responseObj = {};

    const calendarInput =  {
      user_id: userId,
      name: 'Baking Club',
      color_id: 2
    };

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
    const userId = 1; // TODO: update
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

  router.put('/:id', (req, res) => {
    const calendarId = req.params.id;
    // TODO: req.body
    const calendarInput =  {
      name: 'Drinking Crew',
      color_id: 2
    }

    db.calendars.updateCalendar(calendarId, calendarInput)
      .then((queryResponse) => {
        res.json(queryResponse);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });



  return router;
}