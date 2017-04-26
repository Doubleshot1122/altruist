'use strict'
const express = require('express');
const knex = require('../db');
const router = express.Router();

/* GET home page. */
// router.get('/register', function(req, res, next) {
//   knex('skills').select('type as skills')
//   .then(edit => {
//     console.log(typeof edit);
//     res.render('volunteer/edit', {title: 'Register Profile', profile: edit});
//   })
// });

router.get('/register', function(req, res, next) {
  let skills = knex('skills').select('type');
  let profile = {username: "donny", id: 4};
  Promise.all([skills, profile])
  .then(results => {
    console.log(results);
    res.render('volunteer/edit', {title: 'Register Profile', profile: results});
  })
});

router.get('/login', function(req, res, next) {
  res.render('login', {title : 'Login'});
});

router.get('/register/:username', function(req, res, next) {
  res.redirect(`volunteers/edit/${username}`, {action : 'create'});
  //------is this different from the edit profile?-----
});

router.get('/edit', (req, res, next) => {
  var editRenderObject = {new:true};
  res.render(`volunteer/edit`, {editRenderObject})
})

// router.get('/edit/:username', function(req, res, next) {
//   let reqUserName = req.params.username;
//   let skill = knex('skills').select('type');
//   let profile = knex('volunteers')
//   .select('volunteers.*', 'skills.type', 'users.user_name')
//   .innerJoin('users', 'users.id', 'volunteers.user_id')
//   .innerJoin('volunteers_skills', 'volunteers_skills.volunteer_id', 'volunteers.id')
//   .innerJoin('skills', 'skills.id', 'volunteers_skills.skill_id')
//   .where('users.user_name', reqUserName);
//   Promise.all([skill, profile])
//   .then(results => {
//     console.log(results);
//
//     editUserResult.forEach(element => {skills.push(element.type)});
//
//     editUserResult[1].skills = skills;
//     editUserResult[0].new = false;
//     var profile = editUserResult[0];
//     console.log('================');
//     console.log('skills', skill);
//     console.log('================');
//     // console.log('profile', profile);
//     console.log('================');
//     res.render(`volunteer/edit`, {title: `${reqUserName}'s Profile`, profile});
//   })
// });

router.get('/edit/:username', (req, res, next) => {
  let username = req.params.username;
  let allSkills = knex('skills');
  let volunteerSkills = knex('volunteers_skills')
  let profile = knex('volunteers')
  .select('volunteers.*')

  Promise.all([allSkills, volunteerSkills, profile, username])
  .then(results => {
    
  })
  .then(results => {
    var profile = [[{type: "run"}, {type: "jump"}], {username: username}]
    console.log(profile);
    res.render('volunteer/edit', {title: `${username}'s Profile'`, profile})
  })
})

router.get('/dashboard/:username', function(req, res, next) {

  //update from booked to complete in bookings table
  let reqUserName = req.params.username;
  let query = knex('bookings')
  .select('bookings.*', 'non_profits.*', 'users.user_name', 'skills.type')
  .innerJoin('non_profits', 'bookings.non_profit_id', 'non_profits.id')
  .innerJoin('volunteers', 'volunteers.id', 'bookings.volunteer_id')
  .innerJoin('users', 'volunteers.user_id', 'users.id')
  .innerJoin('skills', 'bookings.skill', 'skills.id')
  .where('users.user_name', reqUserName)



  query.then(results => {
    //calculate duration of bookings
    //calculate total time spent on each completed booking
    //5
    console.log('results', results);
  })


  // res.render(`volunteers/dashboard/${username}`, {result});
  res.render('index', {title : 'dashboard'});
});

router.get('/bio/:username', function(req, res, next) {
  let username = req.params.username;
  let profile = {}
  res.render(`volunteer/bio`, {title: `${username}'s Bio`, profile});
});

router.get('/profile/:username', function(req, res, next) {
  let username = req.params.username;
  let profile = {}
  res.render(`volunteer/profile`, {title: `${username}'s Profile`, profile});
});

router.post('/profile/:username', function(req, res, next) {
  res.redirect(`volunteer/profile/${username}`);
});

router.put('/profile/:username', function(req, res, next) {
  res.redirect(`volunteer/profile/${username}`);
});

router.put('/booking/:id', function(req, res, next) {
  res.redirect(`volunteers/dashboard/${username}`);
});

module.exports = router;
