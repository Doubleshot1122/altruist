
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteer_travelRadius').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer_travelRadius').insert([
        {id: 1, radius: 5},
        {id: 2, radius: 10},
        {id: 3, radius: 15}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('volunteer_travelRadius_id_seq', (SELECT MAX(id) FROM volunteer_travelRadius));"
      );
    });
};
