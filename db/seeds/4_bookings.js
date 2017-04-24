
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([{
        id: 1,
        volunteer_id: 1,
        non_profit_id: 1,
        start_date_time: '2017-04-28 19:00:00 UTC', end_date_time: '2017-04-28 21:00:00 UTC',
        status: 'booked',
        special_directions: 'Room 10',
        volunteer_job_assessment: ''
      },
      {
        id: 2,
        volunteer_id: 2,
        non_profit_id: 2,
        start_date_time: '2017-05-05 14:00:00 UTC',
        end_date_time: '2017-05-05 16:00:00 UTC',
        status: 'booked',
        special_directions: 'Baker room, check-in at front desk 10 minutes prior',
        volunteer_job_assessment: ''
      }
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('bookings_id_seq', (SELECT MAX(id) FROM bookings));"
      );
    });
};
