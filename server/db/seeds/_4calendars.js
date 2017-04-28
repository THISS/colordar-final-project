
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('calendars').del()
    .then(function () {
      // Inserts seed entries
      return knex('calendars').insert([
        {color_id: 1, user_id: 2, name: 'Work Schedule'},
        {color_id: 4, user_id: 1, name: 'Work'},
        {color_id: 3, user_id: 2, name: 'Yard Work'},
        {color_id: 2, user_id: 3, name: 'Social'},
        {color_id: 2, user_id: 2, name: 'Birthdays'},
        {color_id: 1, user_id: 1, name: 'Important Events'},
        {color_id: 1, user_id: 3, name: 'Holidays'}
      ]);
    });
};
