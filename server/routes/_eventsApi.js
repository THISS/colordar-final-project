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
    const eventInput = {
      name: 'darts at mine',
      location: 'my house',
      start_time: '2017-04-29T23:07:20.184Z',
      end_time: '2017-04-29T23:07:20.184Z',
      calendar_id: 2,
      color_code: 'primary'
    };
    


    // response: {
    //   id: (dbIdOfEvent || undefined), 
    //   errors: (['an','array','of','errors'] || undefined)
    // }
  });

  router.get('/:id', (req, res) => {
    // response: {
    //   id: eventId,
    //   name: 'String of event name',
    //   location: 'String of event location',
    //   start: unixTimestamp of start time,
    //   end: unixTimestamp of end time,
    //   calendarId: calendar_id,
    //   color: colorCode
    // }
  });

  router.put('/:id', (req, res) => {
    // request: {
    //   id: eventId,
    //   name: 'String of event name',
    //   location: 'String of event location',
    //   start: unixTimestamp of start time,
    //   end: unixTimestamp of end time,
    //   calendarId: calendar_id,
    //   color: colorCode
    // }

    // response: {errors: ['an','array','of','errors']}
  });


  return router;
}