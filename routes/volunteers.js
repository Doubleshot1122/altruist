'use strict'
const express = require('express');
const knex = require('../db');
const router = express.Router();

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.render('volunteer/edit', {title : 'Register Profile'});
});

router.get('/login', function(req, res, next) {
  res.render('login', {title : 'Login'});
});

router.get('/register/:username', function(req, res, next) {
  res.redirect(`volunteers/edit/${username}`, {action : 'create'});
  //------is this different from the edit profile?-----
});


router.get('/edit/:username', function(req, res, next) {
  let reqUserName = req.params.username;
  let query = knex('volunteers')
  .select('volunteers.prefName', 'volunteers.firstName', 'volunteers.lastName', 'volunteers.age', 'volunteers.zip', 'volunteers.travelRadius', 'volunteers.advanceNotice', 'skills.type')
  .innerJoin('users', 'users.id', 'volunteers.user_id')
  .innerJoin('volunteers_skills', 'volunteers_skills.volunteer_id', 'volunteers.id')
  .innerJoin('skills', 'skills.id', 'volunteers_skills.skill_id')
  .where('users.userName', reqUserName)

  query.then(editUserResult => {
    let skills = [];
    editUserResult.forEach(element => {skills.push(element.type)});
    editUserResult[0].skills = skills;
    console.log(editUserResult[0]);
  })
  // res.render(`volunteers/edit/${username}`, {action : 'edit'});
  res.render('index', {title : 'edit profile'});
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
