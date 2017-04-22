
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([{
        id: 1,
        volunteer_id: 1,
        non_profit_id: 1,
        startDateTime: '2017-04-28 19:00:00 UTC', endDateTime: '2017-04-28 21:00:00 UTC',
        status: 1,
        specialDirections: 'Room 10',
        volunteerJobAssessment: ''},
        {id: 2, volunteer_id: 2, non_profit_id: 2, startDateTime: '2017-05-05 14:00:00 UTC', endDateTime: '2017-05-05 16:00:00 UTC', status: 1, specialDirections: 'Baker room, check-in at front desk 10 minutes prior', volunteerJobAssessment: ''},

      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('bookings_id_seq', (SELECT MAX(id) FROM bookings));"
      );
    });
};
