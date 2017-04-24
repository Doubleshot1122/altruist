'use strict'
const express = require('express');
const knex = require('../db');
const router = express.Router();

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('nonprofit/login', {title : 'Register'});
});
router.get('/login', function(req, res, next) {
  res.render('nonprofit/login', {title : 'Login'});
});
router.get('/register/:username', function(req, res, next) {
  res.render('nonprofit/edit', {title : 'Create profile', action : 'create'});
});
router.get('/profile/:username', function(req, res, next) {
  res.render('nonprofit/profile' );
});
router.get('/edit/:username', function(req, res, next) {
  res.render('nonprofit/edit', {title : 'Edit profile', action : 'edit'});
});
router.get('/search', function(req, res, next) {
  res.render('nonprofit/search');
});
router.get('/search/:username', function(req, res, next) {
  res.render('nonprofit/search', {results});
});
router.get('/dashboard', function(req, res, next) {
  res.render('nonprofit/dashboard');
});
router.post('/profile/:username', function(req, res, next) {
  // res.redirect(`nonprofits/profile/${username}`,);
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
