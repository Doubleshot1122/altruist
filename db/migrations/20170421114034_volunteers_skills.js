exports.up = function(knex) {
  return knex.schema.createTable('volunteers_skills', table => {
    table.integer('skill_id').notNullable();
    table.integer('volunteer_id').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('volunteers_skills')
};
 
