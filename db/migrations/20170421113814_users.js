exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('nameName').notNullable()
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.text('review_description').notNullable()
    table.integer('my_rating').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
