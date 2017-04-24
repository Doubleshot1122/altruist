exports.up = (knex) => {
  return knex.schema.createTable('bookings', table => {
    table.increments()
    table.integer('volunteer_id').notNullable()
    table.integer('non_profit_id').notNullable()
    table.dateTime('start_date_time').notNullable()
    table.dateTime('end_date_time').notNullable()
    table.string('status').notNullable()
    table.string('special_directions')
    table.string('volunteer_job_assessment')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('bookings')
}
