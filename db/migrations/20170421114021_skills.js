
exports.up = function(knex) {
  return knex.schema.createTable('skills', table => {
    table.increments();
    table.string('type').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('skills')
};
