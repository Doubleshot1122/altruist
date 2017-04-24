exports.up = (knex) => {
  return knex.schema.createTable('volunteers', table => {
    table.increments()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('pref_name')
    table.integer('age')
    table.integer('zip').notNullable()
    table.decimal('lat',10,6).notNullable()
    table.decimal('long',10,6).notNullable()
    table.integer('travel_radius').notNullable()
    table.integer('advance_notice').notNullable()
    table.integer('user_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('volunteers')
}
