
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {color_id: 1, name: 'Friends', owner_id: 1},
        {color_id: 3, name: 'Work', owner_id: 1},
        {color_id: 4, name: 'Hiking', owner_id: 2},
        {color_id: 2, name: 'Tennis', owner_id: 1},
        {color_id: 1, name: 'Market', owner_id: 3},
        {color_id: 3, name: 'Foodies', owner_id: 2},
        {color_id: 2, name: 'Work Friends', owner_id: 3}
      ]);
    });
};
