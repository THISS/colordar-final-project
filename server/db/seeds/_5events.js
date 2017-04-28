const moment = require('moment');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {calendar_id: 1, color_id: 2, name: 'shift', start_time: moment().add(1, 'day'), end_time: moment().add(1, 'day').add(8, 'hours'), location: 'a random address defined by string.'},
        {calendar_id: 2, color_id: 2, name: 'shift', start_time: moment().add(1, 'day'), end_time: moment().add(1, 'day').add(8, 'hours'), location: 'a random address defined by string.'},
        {calendar_id: 1, color_id: 2, name: 'shift', start_time: moment().add(2, 'day'), end_time: moment().add(1, 'day').add(8, 'hours'), location: 'a random address defined by string.'},
        {calendar_id: 3, color_id: 2, name: 'shift', start_time: moment().add(1, 'day'), end_time: moment().add(1, 'day').add(8, 'hours'), location: 'a random address defined by string.'}
      ]);
    });
};
