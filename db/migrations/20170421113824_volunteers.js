exports.up = (knex) => {
  return knex.schema.createTable('volunteers', table => {
    table.increments()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('prefName')
    table.integer('age')
    table.integer('zip').notNullable()
    table.integer('travelRadius').notNullable()
    table.integer('advanceNotice').notNullable()
    table.integer('user_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('volunteers')
} 
