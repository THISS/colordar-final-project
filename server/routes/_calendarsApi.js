const express = require('express');
const router = express.Router();

module.exports = (db, log) => {
  const errorHandler = (error, res) => {
    log.error(error);
    return res.json({error: 'something funky went down'});
  };
  
  router.get('/',(req, res) => {
    const userId = req.user.id;
    const responseObj = {};

    log.info(`The current user id ${userId} is requesting calendars`);
    
    db.calendars.getAllCalendars(userId)
      .then(queryResponse => {
        responseObj.calendars = queryResponse;
        return res.json(responseObj);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  // Creating a new calendar requires: color_id (1-4)| owner_id (current logged in user)| name
  router.post('/', (req, res) => {
    const userId = req.user.id;
    const responseObj = {};

    const calendarInput =  req.body;
    calendarInput.owner_id = userId;

    db.calendars.addCalendar(calendarInput)
      .then(queryResponse => {
        responseObj.calendars = queryResponse[0];
        return db.calendars.linkMaster(userId, queryResponse[0].id)
      })
      .then(queryResponse => {
        return res.json(responseObj);
      })
      .catch((error) => {
        errorHandler(error, res);
      });
  });

  router.get('/:id', (req, res) => {
    const calendarId = req.params.id;
    const userId = req.user.id;
    const responseObj = {};

    if (!calendarId) {
      errorHandler('no calendarId given', res);
    }
    if (calendarId === 'master') {
      db.events.getMasterCalendarEvents(userId)
        .then(queryResponse => {
          Object.assign(responseObj, {
            id: calendarId,
            name: 'Master',
            events: queryResponse
          });

          return res.json(responseObj);
        })
        .catch((error) => {
          errorHandler(error, res);
        });
    }else {
      db.calendars.getCalendarById(calendarId)
        .then(queryResponse => {
          Object.assign(responseObj, {
            id: queryResponse.id,
            name: queryResponse.name,
            color_id: queryResponse.color_id,
          });

          return db.events.getAllCalendarEvents(calendarId);
        })
        .then(queryResponse => {
          Object.assign(responseObj, {
            events: queryResponse
          });
          return res.json(responseObj);
        })
        .catch((error) => {
          errorHandler(error, res);
        });
    }
  });

  router.put('/master/edit', (req, res) => {
    const userId = req.user.id;
    const { merged, calendar_id } = req.body;

    db.calendars.updateMaster(userId, calendar_id, !!parseInt(merged))
      .then(queryResponse => {
        return res.json({success: true, merged})
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });

  router.put('/:id/edit', (req, res) => {
    const calendarId = req.params.id;
    const calendarInput =  req.body;

    db.calendars.updateCalendar(calendarId, calendarInput)
      .then(queryResponse => {
        return res.json(queryResponse[0]);
      })
      .catch(error => {
        errorHandler(error, res);
      });
  });



  return router;
}