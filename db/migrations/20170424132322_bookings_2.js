exports.up = (knex) => {
  return knex.schema.table('bookings', table => {
    table.integer('skill').notNull().defaultTo(0);
  })
}

exports.down = (knex) => {
  return knex.schema.table('bookings', table => {
    table.dropColumn('skill')
  })
}
