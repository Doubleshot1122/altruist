'use strict'
const express = require('express');
const knex = require('../db');
const router = express.Router();
const functions = require('./miscellaneous')

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.render('nonprofit/edit', {title : 'Register Profile', profile: {} });
});

router.get('/login', function(req, res, next) {
  res.render('login', {title : 'Login'});
});

router.get('/edit/:username', function(req, res, next) {
  let user_name = req.params.username;
  knex.from('users').innerJoin('non_profits', 'users.id', 'non_profits.user_id')
  .select('*')
  .where({user_name})
  .first()
  .then(profile => {
    console.log(profile);
    res.render('nonprofit/edit', {title : 'Edit profile', profile});
  })
});

router.get('/profile/:username', function(req, res, next) {
  let user_name = req.params.username
  knex.from('users').innerJoin('non_profits', 'users.id', 'non_profits.user_id')
  .select('*')
  .where({user_name})
  .first()
  .then( profile => {
    let address="111%20S%20Jackson%20St,%20Seattle,%20WA%2098104"
    // let address = profile.line_1.split(' ').join('%20')
    //  +'%20'+profile.line_2+'%20'+profile.city+'%20'+profile.zip
    profile.query =`https://www.google.com/maps/embed/v1/place?key=AIzaSyB4XveFwGrMviTxuVmluc1zOh5USwpQMxc&q=${address}&zoom=18&maptype=roadmap`
    res.render('nonprofit/profile', {title : 'Profile', profile});
  })
});

router.get('/search', function(req, res, next) {
  //let user_id =req.session.userId
  let user_id= 4;
  let results={};
  // if (req.query.start_date_time){
  //   console.log(req.query.start_date_time);
  //   where.start_date_time = req.query.start_date_time;
  // }
  // if (req.query.start_time) {
  //   console.log(req.query.start_time);
  //
  //   where.start_time = req.query.start_time;
  // }
  // if (req.query.end_time) {
  //   console.log(req.query.end_time);
  //
  //   where.end_time = req.query.end_time;
  // }
  knex('non_profits')
  .select('lat','long')
  .where(user_id,4)
  .first()
  .then(location_info => {
    results.origin = location_info;
    return knex.select('lat','long', 'travel_radius','advance_notice').from('bookings').innerJoin('volunteers','bookings.volunteer_id', 'volunteers.user_id')
    .where('bookings.status','<>','booked')
    .andWhere(knex.raw("DATE(start_date_time)='2017-04-28'"))
    .andWhere(knex.raw("EXTRACT('hour' FROM start_date_time)>=19"))
    .andWhere(knex.raw("EXTRACT('hour' FROM end_date_time)<=20"))
    .andWhere(knex.raw("DATE_PART('day','2017-04-28'::date)- DATE_PART('day',CURRENT_DATE::date)<= advance_notice"))
  })
  .then(info =>{
    //console.log(info);
    results.destinations = info;
    return functions.getDistances(results);
  })
  .then(distances =>{
    results.distances = distances;
    console.log(distances.rows[0]);
    // let available =[];
    // for(var index of results){
    //   if (results.distances.rows)
    // }
    //console.log(results);
  })
  .catch(err => {
    console.log(err);
  })

  knex('skills')
  .select('type')
  .then(skills => {
    res.render('nonprofit/search', {skills})
  })

});

router.get('/dashboard', function(req, res, next) {
  res.render('nonprofit/dashboard');
});
router.post('/profile/:username', function(req, res, next) {
  res.redirect(`nonprofits/profile/${username}`);
});
router.post('/booking', function(req, res, next) {
  res.redirect(`nonprofits/search/${username}`);
});
router.post('/', function(req, res, next) {
  res.redirect(`nonprofits/register/${username}`);
});
router.put('/profile/:username', function(req, res, next) {
  res.redirect(`nonprofit/profile/${username}`);
});
router.put('/booking/:id', function(req, res, next) {
  res.redirect(`nonprofit/search/${username}`);
});

module.exports = router;
// latlong('55436')
// .then(result => {
//   console.log('inside route', result.results[0].geometry.location);
//   res.render('nonprofit/login', {title : 'Register', result : result});
// })
