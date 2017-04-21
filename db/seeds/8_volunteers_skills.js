
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers_skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers_skills').insert([
        {skill_id: 1, volunteer_id: 1},
        {skill_id: 6, volunteer_id: 1},
        {skill_id: 4, volunteer_id: 2},
        {skill_id: 3, volunteer_id: 3},
        {skill_id: 2, volunteer_id: 4},
        {skill_id: 1, volunteer_id: 2}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('volunteers_skills_id_seq', (SELECT MAX(id) FROM volunteers_skills));"
      );
    });
};
