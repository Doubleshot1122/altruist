
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('non_profit_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, type: 'Nursing Home'},
        {id: 2, type: 'Hospital'},
        {id: 3, type: 'Community center'}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('non_profit_types_id_seq', (SELECT MAX(id) FROM non_profit_types));"
      );
    });
};
