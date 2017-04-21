exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('userName').notNullable()
    table.specificType('password', 'char(60)').notNullable();
    table.integer('role').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
