
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {id: 1, type: 'Time'},
        {id: 2, type: 'Instrument'},
        {id: 3, type: 'Performer'},
        {id: 4, type: 'Gardening'},
        {id: 5, type: 'Driving'},
        {id: 6, type: 'Teaching'}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('skills_id_seq', (SELECT MAX(id) FROM skills));"
      );
    });
};
