exports.up = function(knex) {
  return knex.schema.createTable('booking_status')
  table.increments();
  table.string('status').notNullable();
};

exports.down = function(knex) {
  return knex.schema.dropTable('booking_status')
};
