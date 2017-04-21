exports.up = (knex) => {
  return knex.schema.createTable('non_profits', table => {
    table.increments()
    table.string('name').notNullable()
    table.integer('type').notNullable()
    table.string('description').notNullable()
    table.string('contactName').notNullable()
    table.string('contactEmail').notNullable()
    table.string('contactPhone').notNullable()
    table.string('line_1').notNullable()
    table.string('line_2')
    table.string('city').notNullable()
    table.string('state', 'char(2)').notNullable()
    table.integer('zip').notNullable()
    table.string('comments').notNullable()
    table.integer('user_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('non_profits')
}
