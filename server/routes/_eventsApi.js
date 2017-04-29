const express = require('express');
const router = express.Router();

module.exports = function(db) {
  
  router.get('/',(req, res) => {
    response: {
      calendars: [{
        id: calid,
        name: 'String of calendars name',
        color: color_id,
        merged: bool
      }],
      events: [{
        id: eventId,
        name: 'String of events name',
        location: 'String of events location',
        start: unixTimestamp of start time,
        end: unixTimestamp of end time,
        color: colorCode
      },
      {
        id: eventId,
        name: 'String of events name',
        location: 'String of events location',
        start: unixTimestamp of start time,
        end: unixTimestamp of end time,
        color: colorCode
      }]
    }
  });

  router.post('/', (req, res) => {
    request: {
      name: 'String of event name',
      location: 'String of event location',
      start: unixTimestamp of start time,
      end: unixTimestamp of end time,
      calendarId: calendar_id,
      color: colorCode
    }

    response: {id: (dbIdOfEvent || undefined), errors: (['an','array','of','errors'] || undefined)}
  });

  router.get('/:id', (req, res) => {
    response: {
      id: eventId,
      name: 'String of event name',
      location: 'String of event location',
      start: unixTimestamp of start time,
      end: unixTimestamp of end time,
      calendarId: calendar_id,
      color: colorCode
    }
  });

  router.put('/:id', (req, res) => {
    request: {
      id: eventId,
      name: 'String of event name',
      location: 'String of event location',
      start: unixTimestamp of start time,
      end: unixTimestamp of end time,
      calendarId: calendar_id,
      color: colorCode
    }

    response: {errors: ['an','array','of','errors']}
  });


  return router;
}