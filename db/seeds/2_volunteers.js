exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('volunteers').del()
        .then(function() {
            // Inserts seed entries
            return knex('volunteers').insert([{
                    id: 1,
                    first_name: 'Donny',
                    last_name: 'Barclay',
                    pref_name: 'Double Shot',
                    age: 23,
                    zip: 98104,
                    lat: 47.6015566,
                    long: -122.3323351,
                    travel_radius: 25,
                    advance_notice: 7,
                    user_id: 1
                },
                {
                    id: 2,
                    first_name: 'Betty',
                    last_name: 'Chempananical',
                    pref_name: 'Betty',
                    age: 37,
                    zip: 98008,
                    lat : 47.6120759,
                    long : -122.1112721,
                    travel_radius: 10,
                    advance_notice: 1,
                    user_id: 2
                },
                {
                    id: 3,
                    first_name: 'Rhea',
                    last_name: 'Chempananical',
                    pref_name: 'Rhea',
                    age: 10,
                    zip: 98008,
                    lat : 47.6120759,
                    long : -122.1112721,
                    travel_radius: 5,
                    advance_notice: 7,
                    user_id: 5
                },
                {
                    id: 4,
                    first_name: 'Ryan',
                    last_name: 'Chempananical',
                    pref_name: 'Rhea',
                    age: 6,
                    zip: 98402,
                    lat : 47.2529105,
                    long : -122.4417426,
                    travel_radius: 5,
                    advance_notice: 7,
                    user_id: 6
                }
            ]);
        }).then(() => {
            return knex.raw(
                "SELECT setval('volunteers_id_seq', (SELECT MAX(id) FROM volunteers));"
            );
        });
};
