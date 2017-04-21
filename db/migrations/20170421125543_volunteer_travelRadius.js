exports.up = (knex) => {
  return knex.schema.createTable('volunteer_travelRadius', table => {
    table.increments()
    table.integer('radius').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('volunteer_travelRadius')
}
