'use strict'
const express = require('express');
const knex = require('../db');
const router = express.Router();
const latlong = require('./miscellaneous')

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
  let user_id= 3;
console.log(req.query);
  let where = {};
  if (req.query.start_date_time){
    where.start_date_time = req.query.start_date_time;
  }
  if (req.query.start_time) {
    where.start_time = req.query.start_time;
  }
  if (req.query.end_time) {
    where.end_time = req.query.end_time;
  }
  let query = knex('bookings')
  .select(knex.raw("extract('hour' from start_date_time) as start_hour, extract('hour' from end_date_time) as end_hour"))
  .where('start_date_time', req.query.start_date_time)
  .where('start_hour','>=', req.query.start_time)
  .where('end_hour', '<=', req.query.end_time);
  console.log(query)

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
