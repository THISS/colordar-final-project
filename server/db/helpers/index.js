// This is the database helper file that pulls all of the helpers together
module.exports = function(knex) {
  const user = require('./_users')(knex);
  const group = require('./_groups')(knex);
  const calendar = require('./_calendars')(knex);
  const event = require('./_events')(knex);

  return {
    user,
    group,
    calendar,
    event
  };
}