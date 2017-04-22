
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteer_advance_notice').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer_advance_notice').insert([
        {id: 1, notice: 1},
        {id: 2, notice: 2},
        {id: 3, notice: 3},
        {id: 4, notice: 7},
        {id: 5, notice: 14}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('volunteer_advance_notice_id_seq', (SELECT MAX(id) FROM volunteer_advance_notice));"
      );
    });
};
