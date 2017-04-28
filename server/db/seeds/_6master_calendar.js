
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('master_calendars').del()
    .then(function () {
      // Inserts seed entries
      return knex('master_calendars').insert([
        {user_id: 1, calendar_id: 1, merged: true},
        {user_id: 2, calendar_id: 2, merged: true},
        {user_id: 2, calendar_id: 3, merged: true}
      ]);
    });
};
