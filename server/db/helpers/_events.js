// events table
module.exports = function(knex, logger) {
  const TABLE_NAME = 'events';

  // functions for the database go here
  const addEvent = eventObj => {
    return knex.insert(eventObj, ['id', 'color_id', 'calendar_id', 'name', 'start_time', 'end_time', 'location'])
      .into(TABLE_NAME);
  };

  const deleteEvent = eventId => {
    return knex.del()
      .from(TABLE_NAME)
      .where({ id: eventId });
  };

  const getAllCalendarEvents = calendarId => {
    return knex.select(
      'events.id',
      'color_id',
      'name',
      'start_time',
      'end_time',
      'location'
    )
      .from(TABLE_NAME)
      .where({ calendar_id: calendarId });
  };

  const getEventById = eventId => {
    return knex.first([
      'id',
      'color_id',
      'calendar_id',
      'name',
      'start_time',
      'end_time',
      'location'
    ])
    .from(TABLE_NAME)
    .where({ id: eventId });
  };

  const getMasterCalendarEvents = userId => {
    // need to take user id in master_calendars and use the calendar ids where merged is true
    // need to get all events where the calendar_id is in the calendar ids
    return knex.select([
      'events.id',
      'color_id',
      'events.calendar_id',
      'name',
      'start_time',
      'end_time',
      'location'
    ])
      .from(TABLE_NAME)
      .innerJoin('master_calendars', 'events.calendar_id', '=', 'master_calendars.calendar_id')
      .innerJoin('users', 'master_calendars.user_id', '=', 'users.id')
      .where({
        merged: true,
        'users.id': userId
      });
  };

  const getUsersCalendars = userId => {
    return knex.select([
      'calendars.id',
      'name',
      'color_id',
      'merged'
    ])
      .from('calendars')
      .innerJoin('master_calendars', 'calendars.id', '=', 'master_calendars.calendar_id')
      .where({
        'calendars.owner_id': userId
      });
  };

  const updateEvent = (eventId, eventObj) => {
    return knex(TABLE_NAME)
      .update(eventObj)
      .where({ id: eventId })
      .returning([
          'id',
          'color_id',
          'calendar_id',
          'name',
          'start_time',
          'end_time',
          'location'
        ]
      );
  };

  return {
    addEvent,
    deleteEvent,
    getAllCalendarEvents,
    getEventById,
    getMasterCalendarEvents,
    getUsersCalendars,
    updateEvent
  };
}