'use strict'
const express = require('express');
const knex = require('../db');
const router = express.Router();

/* GET home page. */
router.get('/register/:username', function(req, res, next) {
  res.redirect(`volunteers/edit/${username}`, {action : 'create'});
});
router.get('/edit/:username', function(req, res, next) {
  res.render(`volunteers/edit/${username}`, {action : 'edit'});
});
router.get('/dashboard/:username', function(req, res, next) {
  res.render(`volunteers/dashboard/${username}`, {result});
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
