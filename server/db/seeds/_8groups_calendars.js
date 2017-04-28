
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups_calendars').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups_calendars').insert([
        {group_id: 1, calendar_id: 3},
        {group_id: 2, calendar_id: 4},
      ]);
    });
};
