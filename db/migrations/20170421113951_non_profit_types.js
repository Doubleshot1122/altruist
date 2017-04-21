
exports.up = function(knex) {
  return knex.schema.createTable('non_profit_types', table => {
    table.increments();
    table.string('type').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('non_profit_types')
};
