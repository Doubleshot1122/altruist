'use strict';

exports.seed = function(knex) {
  return knex('non_profits').del()
    .then(() => {
      return knex('non_profits').insert([{
        id: 1,
        name: 'New Horizons',
        type: 'Nursing Home',
        description: "Keep old people happy for their final years",
        contact_name: "Jane Dow",
        contact_email: 'jd@msn.com',
        contact_phone: '801-555-1212',
        line_1: '151 N Pioneer St',
        line_2: '',
        city: 'seattle',
        state: 'WA',
        zip: 98104,
        lat: 47.6015566,
        long: -122.3323351,
        comments: 'Here are some comments',
        user_id: 2
      },{
        id: 2,
        name: 'Mercy Hospital',
        type: 'Hospital',
        description: "Keep old people happy for thier final years",
        contact_name: "Jerry Downy",
        contact_email: 'jdor@msn.com',
        contact_phone: '801-555-2323',
        line_1: '400 N Pioneer St',
        line_2: '',
        city: 'seattle',
        state: 'WA',
        zip: 98104,
        lat: 47.6015566,
        long: -122.3323351,
        comments: 'Floor 1 - Denali room',
        user_id: 2
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('non_profits_id_seq', (SELECT MAX(id) FROM non_profits));"
      );
    });
};
