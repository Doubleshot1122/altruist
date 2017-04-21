exports.up = (knex) => {
  return knex.schema.createTable('volunteer_advanceNotice', table => {
    table.increments()
    table.integer('notice').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('volunteer_advanceNotice')
}
