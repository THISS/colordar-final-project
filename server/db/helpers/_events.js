// events table
module.exports = function(knex) {
  // functions for the database go here
  const getUsersCalendars = (userId) => {
    return knex.select(
      'calendars.id',
      'name',
      'color_code',
      'merged'
      )
      .from('calendars')
      .innerJoin('colors', 'colors.id', '=', 'calendars.color_id')
      .innerJoin('master_calendars', 'calendars.id', '=', 'master_calendars.calendar_id')
      .where({
        'calendars.user_id': userId
      })
  };

  const getMasterCalendarEvents = (userId) => {
    // need to take user id in master_calendars and use the calendar ids where merged is true
    // need to get all events where the calendar_id is in the calendar ids
    return knex.select(
      'events.id',
      'color_code',
      'events.calendar_id',
      'name',
      'start_time',
      'end_time',
      'location'
    )
      .from('events')
      .innerJoin('colors', 'colors.id', '=', 'events.color_id')
      .innerJoin('master_calendars', 'events.calendar_id', '=', 'master_calendars.calendar_id')
      .innerJoin('users', 'master_calendars.user_id', '=', 'users.id')
      .where({
        merged: true,
        'users.id': userId
      });
  };

  const getAllCalendarEvents = (calendarId) => {
    return knex.select(
      'events.id',
      'color_code',
      'name',
      'start_time',
      'end_time',
      'location'
    )
      .from('events')
      .innerJoin('colors', 'colors.id', '=', 'events.color_id')
      .where({ calendar_id: calendarId });
  };

  // const masterCalendarEvents = () => {};
  // const masterCalendarEvents = () => {};
  // const masterCalendarEvents = () => {};
  // const masterCalendarEvents = () => {};
  // const masterCalendarEvents = () => {};
  // const masterCalendarEvents = () => {};


  return {
    getAllCalendarEvents,
    getMasterCalendarEvents,
    getUsersCalendars
  };
}