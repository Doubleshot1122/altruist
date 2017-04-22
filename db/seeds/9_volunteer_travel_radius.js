
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteer_travel_radius').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer_travel_radius').insert([
        {id: 1, radius: 5},
        {id: 2, radius: 10},
        {id: 3, radius: 15}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('volunteer_travel_radius_id_seq', (SELECT MAX(id) FROM volunteer_travel_radius));"
      );
    });
};
