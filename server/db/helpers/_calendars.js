// calendars table
module.exports = function(knex, logger) {
  const TABLE_NAME = 'calendars';

  // functions for the database go here
  const addCalendar = (calendarObj) => {
    return knex.insert(calendarObj, ['id', 'name', 'color_id'])
      .into(TABLE_NAME);
  };

  const getAllCalendars = userId => {
    return knex.select([
      'id',
      'name',
      'color_id'
    ])
    .from(TABLE_NAME)
    .where({owner_id: userId});
  };

  const getCalendarById = calendarId => {
    return knex.first([
      'id',
      'name',
      'color_id'
    ])
    .from(TABLE_NAME)
    .where({id: calendarId});
  };

  const linkMaster = (userId, calendarId) => {
    return knex.insert({
      user_id: userId,
      calendar_id: calendarId,
      merged: true
    })
    .into('master_calendars');
  };

  const updateCalendar = (calendarId, calendarObj) => {
    return knex(TABLE_NAME)
      .update(calendarObj)
      .where({id: calendarId})
      .returning(['id','name', 'color_id']);
  };

  return {
    addCalendar,
    getAllCalendars,
    getCalendarById,
    linkMaster,
    updateCalendar
  };
}