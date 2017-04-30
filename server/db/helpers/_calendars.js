// calendars table
module.exports = function(knex) {
  // functions for the database go here
  const addCalendar = (calendarObj) => {
    return knex.insert(calendarObj, ['id', 'name', 'color_id'])
      .into('calendars');
  };

  const getAllCalendars = (userId) => {
    return knex.select(
      'id',
      'name',
      'color_id'
    )
    .from('calendars')
    .where({user_id: userId});
  };

  const getCalendarById = (calendarId) => {
    return knex.first(
      'id',
      'name',
      'color_id'
    )
    .from('calendars')
    .where({id: calendarId});
  };

  const linkMaster = (userId, calendarId) => {
    return knex.insert({
      user_id: userId,
      calendar_id: calendarId,
      merged: true
    }
    )
    .into('master_calendars');
  };

  const updateCalendar = (calendarId, calendarObj) => {
    return knex('calendars')
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