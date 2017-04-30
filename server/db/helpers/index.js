// This is the database helper file that pulls all of the helpers together
module.exports = function(knex) {
  const users = require('./_users')(knex);
  const groups = require('./_groups')(knex);
  const calendars = require('./_calendars')(knex);
  const events = require('./_events')(knex);

  return {
    users,
    groups,
    calendars,
    events
  };
}