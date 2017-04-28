
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {color_id: 1, name: 'Friends'},
        {color_id: 3, name: 'Work'},
        {color_id: 4, name: 'Hiking'},
        {color_id: 2, name: 'Tennis'},
        {color_id: 1, name: 'Market'},
        {color_id: 3, name: 'Foodies'},
        {color_id: 2, name: 'Work Friends'}
      ]);
    });
};
