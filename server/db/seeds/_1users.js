
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Brenton',
          email: 'brenton@lighthouselabs.com',
          password_digest: 'fkdfakdjlkasjfkdasjflasd'
        },
        {
          first_name: 'Jan',
          email: 'jan@lighthouselabs.com',
          password_digest: 'fkdfakdjlkasjfkdasjflasd'
        },
        {
          first_name: 'Jeff',
          email: 'jeff@lighthouselabs.com',
          password_digest: 'fkdfakdjlkasjfkdasjflasd'
        }
      ]);
    });
};
