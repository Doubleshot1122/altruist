'use strict';

exports.seed = function(knex) {
  return knex('booking_status').del()
    .then(() => {
      return knex('booking_status').insert([{
        id: 1,
        status: 'BOOKED'
      },{
        id: 2,
        status: 'CANCELLED'
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('booking_status_id_seq', (SELECT MAX(id) FROM booking_status));"
      );
    });
};
