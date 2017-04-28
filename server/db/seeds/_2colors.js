
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('colors').del()
    .then(function () {
      // Inserts seed entries
      return knex('colors').insert([
        {color_code: 'primary'},
        {color_code: 'secondary'},
        {color_code: 'thirdary'},
        {color_code: 'fourthary'}
      ]);
    });
};
