exports.up = (knex) => {
  return knex.schema.createTable('volunteer_advance_notice', table => {
    table.increments()
    table.integer('notice').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('volunteer_advance_notice')
}
