
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table) {
      table.integer('owner_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table) {
      table.dropColumn('owner_id');
    })
  ]);
};
