'use strict';

exports.seed = function(knex) {
  return knex('non_profits').del()
    .then(() => {
      return knex('non_profits').insert([{
        id: 1,
        name: 'New Horizons',
        type: 1,
        description: "Keep old people happy for thier final years",
        contactName: "Jane Dow",
        contactEmail: 'jd@msn.com',
        contactPhone: '801-555-1212',
        line_1: '151 N Pioneer St',
        line_2: '',
        city: 'seattle',
        state: 'WA',
        zip: 98104,
        comments: 'Here are some comments',
        user_id: 2
      },{
        id: 2,
        name: 'Mercy Hospital',
        type: 2,
        description: "Keep old people happy for thier final years",
        contactName: "Jerry Downy",
        contactEmail: 'jdor@msn.com',
        contactPhone: '801-555-2323',
        line_1: '400 N Pioneer St',
        line_2: '',
        city: 'seattle',
        state: 'WA',
        zip: 98104,
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
