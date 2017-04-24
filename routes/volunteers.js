'use strict'
const express = require('express');
const knex = require('../db');
const router = express.Router();

/* GET home page. */
router.get('/register', function(req, res, next) {
  console.log("register page");
  res.redirect(`edit/`);
});

router.get('/edit', (req, res, next) => {
  var editRenderObject = {new:true};
  res.render(`volunteer/edit`, {editRenderObject})
})

router.get('/edit/:username', function(req, res, next) {
  let reqUserName = req.params.username;
  let query = knex('volunteers')
  .select('volunteers.pref_name', 'volunteers.first_name', 'volunteers.last_name', 'volunteers.age', 'volunteers.zip', 'volunteers.travel_radius', 'volunteers.advance_notice', 'skills.type')
  .innerJoin('users', 'users.id', 'volunteers.user_id')
  .innerJoin('volunteers_skills', 'volunteers_skills.volunteer_id', 'volunteers.id')
  .innerJoin('skills', 'skills.id', 'volunteers_skills.skill_id')
  .where('users.user_name', reqUserName)

  query.then(editUserResult => {
    let skills = [];
    editUserResult.forEach(element => {skills.push(element.type)});
    editUserResult[0].skills = skills;
    editUserResult[0].new = false;
    var editRenderObject = editUserResult[0];
    console.log(editRenderObject);
    res.render(`volunteer/edit`, {editRenderObject});
  })
});

router.get('/dashboard/:username', function(req, res, next) {
  let reqUserName = req.params.username;
  let query = knex('bookings')
  .select('bookings.*', 'booking_status.status')
  .innerJoin('booking_status', 'bookings.status', 'booking_status.id')


  query.then(results => {

    console.log('results', results);
  })


  // res.render(`volunteers/dashboard/${username}`, {result});
  res.render('index', {title : 'dashboard'});
});


router.get('/profile/:username', function(req, res, next) {
  res.render(`volunteer/profile/${username}`);
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
