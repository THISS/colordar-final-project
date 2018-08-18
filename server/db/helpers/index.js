// This is the database helper file that pulls all of the helpers together
module.exports = function(knex, logger) {
  const users = require('./_users')(knex, logger);
  const groups = require('./_groups')(knex, logger);
  const calendars = require('./_calendars')(knex, logger);
  const events = require('./_events')(knex, logger);

  return {
    users,
    groups,
    calendars,
    events
  };
}