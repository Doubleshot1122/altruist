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
  let err ={};
  let skills =""
  let temp_arr = Object.keys(req.query);

  if (temp_arr.length === 0){
    req.query = undefined;
  }

  knex('skills').select('type')
  .then(skills => {
    results.skills = skills;

    if (req.query!==undefined){
      if (!req.query.start_date_time){
        err.message="Please select a date!"
      }
      if (!req.query.start_time) {
        err.message="Please select a start time!"
      }
      if (!req.query.end_time) {
        err.message="Please select an end time!"
      }
      knex('non_profits')
      .select('lat','long')
      .where(user_id,4)
      .first()
      .then(location_info => {
        results.origin = location_info;
        return knex.select('lat','long', 'travel_radius','advance_notice','first_name','last_name','zip').from('bookings').innerJoin('volunteers','bookings.volunteer_id', 'volunteers.user_id')
         .where('bookings.status','<>','booked')
         .andWhere(knex.raw(` DATE(start_date_time) = '${req.query.start_date_time}'`))
         .andWhere(knex.raw(` EXTRACT('hour' FROM start_date_time)>=${parseInt(req.query.start_time)}`))
         .andWhere(knex.raw(` EXTRACT('hour' FROM end_date_time)<=${parseInt(req.query.end_time)}`))
         .andWhere(knex.raw(`'${req.query.start_date_time}' - CURRENT_DATE <= advance_notice`))
      })
      .then(info =>{
        results.destinations = info;
        return functions.getDistances(results);
      })
      .then(distances =>{
        for (var index in results.destinations){
          let distance = Math.round(distances.rows[0].elements[index].distance.value * 0.000621371192);
          if (distance > results.destinations[index].travel_radius){
            console.log("here");
          delete (results.destinations[index])
          }
        }
        console.log(results.destinations);
      })
    }
  })
  .then(() => {
    res.render('nonprofit/search', {results})
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/dashboard/:username', function(req, res, next) {
  let user_name = req.params.username
  knex.from('users').innerJoin('non_profits', 'users.id', 'non_profits.user_id')
  .select('*')
  .where({user_name})
  .first()
  .then( profile => {
    res.render('nonprofit/dashboard', {title : 'Profile', profile});
  })
});

module.exports = router;
// latlong('55436')
// .then(result => {
//   console.log('inside route', result.results[0].geometry.location);
//   res.render('nonprofit/login', {title : 'Register', result : result});
// })
