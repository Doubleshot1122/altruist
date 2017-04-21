exports.up = (knex) => {
  return knex.schema.createTable('bookings', table => {
    table.increments()
    table.integer('volunteer_id').notNullable()
    table.integer('non_profit_id').notNullable()
    table.dateTime('startDateTime').notNullable()
    table.dateTime('endDateTime').notNullable()
    table.integer('status').notNullable()
    table.string('specialDirections')
    table.string('volunteerJobAssessment')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('bookings')
}
