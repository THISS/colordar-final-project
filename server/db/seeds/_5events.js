const moment = require('moment');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {calendar_id: 1, color_id: 1, name: 'Brunch with mom', start_time: moment().add(1, 'day'), end_time: moment().add(1, 'day').add(8, 'hours'), location: 'Chambar'},
        {calendar_id: 2, color_id: 2, name: 'Meeting', start_time: moment().add(3, 'day'), end_time: moment().add(1, 'day').add(9, 'hours'), location: 'Office.'},
        {calendar_id: 1, color_id: 1, name: 'Drinks w/ Jeff', start_time: moment().add(7, 'day'), end_time: moment().add(8, 'day').add(14, 'hours'), location: 'The Cambie'},
        {calendar_id: 3, color_id: 4, name: 'Dessert', start_time: moment().add(10, 'day'), end_time: moment().add(11, 'day').add(10, 'hours'), location: 'Mosquito'},
        {calendar_id: 3, color_id: 3, name: 'Making wings', start_time: moment().add(15, 'day'), end_time: moment().add(15, 'day').add(16, 'hours'), location: 'Brentons pad'},
        {calendar_id: 3, color_id: 2, name: 'Hot pot', start_time: moment().add(16, 'day'), end_time: moment().add(19, 'day').add(20, 'hours'), location: 'Lighthouse Labs'},
        {calendar_id: 3, color_id: 1, name: 'Important meeting', start_time: moment().add(16, 'day'), end_time: moment().add(16, 'day').add(21, 'hours'), location: 'Starbucks'},
        {calendar_id: 3, color_id: 4, name: 'Demo day', start_time: moment().add(7, 'day'), end_time: moment().add(7, 'day').add(17, 'hours'), location: 'Lighthouse Labs'},
        {calendar_id: 3, color_id: 3, name: 'Do taxes', start_time: moment().add(1, 'day'), end_time: moment().add(1, 'day').add(6, 'hours'), location: 'Parents home'}

      ]);
    });
};
