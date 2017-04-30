
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id');
      table.string('email', 127)
        .notNullable()
        .unique();
      table.string('password_digest')
        .notNullable();
      table.string('first_name', 63)
        .notNullable();
      table.string('profile_image_url');
    }),

    knex.schema.createTableIfNotExists('colors', function(table) {
      table.increments('id');
      table.string('color_code')
        .notNullable();
    }),

    knex.schema.createTableIfNotExists('calendars', function(table) {
      table.increments('id');
      table.integer('color_id')
        .unsigned()
        .references('id')
        .inTable('colors');
      table.integer('owner_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.string('name')
        .notNullable();
      table.timestamps(true, true);
    }),

    knex.schema.createTableIfNotExists('groups', function(table) {
      table.increments('id');
      table.integer('color_id')
        .unsigned()
        .references('id')
        .inTable('colors');
      table.integer('owner_id')
        .unsigned()
        .references('id')
        .inTable('users');
      table.string('name')
        .notNullable();
      table.timestamps(true, true);
    }),

    knex.schema.createTableIfNotExists('events', function(table) {
      table.increments('id');
      table.integer('calendar_id')
        .unsigned()
        .references('id')
        .inTable('calendars')
        .onDelete('CASCADE');
      table.integer('color_id')
        .unsigned()
        .references('id')
        .inTable('colors');
      table.string('name', 127)
        .notNullable();
      table.dateTime('start_time')
        .notNullable();
      table.dateTime('end_time')
        .notNullable();
      table.string('location');
      table.timestamps(true, true);
    }),

    knex.schema.createTableIfNotExists('master_calendars', function(table) {
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.integer('calendar_id')
        .unsigned()
        .references('id')
        .inTable('calendars')
        .onDelete('CASCADE');
      table.boolean('merged')
        .notNullable();

      table.primary(['user_id', 'calendar_id']);
    }),

    knex.schema.createTableIfNotExists('users_groups', function(table) {
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.integer('group_id')
        .unsigned()
        .references('id')
        .inTable('groups')
        .onDelete('CASCADE');
      
      table.primary(['user_id', 'group_id']);
    }),

    knex.schema.createTableIfNotExists('groups_calendars', function(table) {
      table.integer('group_id')
        .unsigned()
        .references('id')
        .inTable('groups')
        .onDelete('CASCADE');
      table.integer('calendar_id')
        .unsigned()
        .references('id')
        .inTable('calendars')
        .onDelete('CASCADE');
      
      table.primary(['group_id', 'calendar_id']);
    }),

    knex.schema.createTableIfNotExists('track_users_groups', function(table) {
      table.increments('id');
      table.integer('inviter_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable();
      table.integer('group_id')
        .unsigned()
        .references('id')
        .inTable('groups')
        .onDelete('CASCADE')
        .notNullable();
      table.string('added_user_email', 127)
        .references('email')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable();
      table.string('uurl')
        .notNullable();
      table.boolean('token_used')
        .notNullable();
      table.timestamps(true,true);

      table.unique(['added_user_email', 'group_id', 'token_used'])
    })
  ]);

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('track_users_groups'),
    knex.schema.dropTableIfExists('groups_calendars'),
    knex.schema.dropTableIfExists('users_groups'),
    knex.schema.dropTableIfExists('master_calendars'),
    knex.schema.dropTableIfExists('events'),
    knex.schema.dropTableIfExists('groups'),
    knex.schema.dropTableIfExists('calendars'),
    knex.schema.dropTableIfExists('colors'),
    knex.schema.dropTableIfExists('users')
  ]);
};
