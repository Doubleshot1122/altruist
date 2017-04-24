exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('volunteers').del()
        .then(function() {
            // Inserts seed entries
            return knex('volunteers').insert([{
                    id: 1,
                    firstName: 'Donny',
                    lastName: 'Barclay',
                    prefName: 'Double Shot',
                    age: 23,
                    zip: 98104,
                    lat: 47.6015566,
                    long: -122.3323351,
                    travelRadius: 5,
                    advanceNotice: 7,
                    user_id: 1
                },
                {
                    id: 2,
                    firstName: 'Betty',
                    lastName: 'Chempananical',
                    prefName: 'Betty',
                    age: 37,
                    zip: 98008,
                    lat : 47.6120759,
                    long : -122.1112721,
                    travelRadius: 10,
                    advanceNotice: 1,
                    user_id: 2
                },
                {
                    id: 3,
                    firstName: 'Rhea',
                    lastName: 'Chempananical',
                    prefName: 'Rhea',
                    age: 10,
                    zip: 98008,
                    lat : 47.6120759,
                    long : -122.1112721,
                    travelRadius: 5,
                    advanceNotice: 7,
                    user_id: 3
                },
                {
                    id: 4,
                    firstName: 'Ryan',
                    lastName: 'Chempananical',
                    prefName: 'Rhea',
                    age: 6,
                    zip: 98402,
                    lat : 47.2529105,
                    long : -122.4417426,
                    travelRadius: 5,
                    advanceNotice: 7,
                    user_id: 4
                }
            ]);
        }).then(() => {
            return knex.raw(
                "SELECT setval('volunteers_id_seq', (SELECT MAX(id) FROM volunteers));"
            );
        });
};
