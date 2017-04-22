exports.up = (knex) => {
  return knex.schema.createTable('volunteer_travel_radius', table => {
    table.increments()
    table.integer('radius').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('volunteer_travel_radius')
}
