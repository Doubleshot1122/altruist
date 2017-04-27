const express = require('express');
const router = express.Router();
const knex = require('../db');
const bcrypt = require('bcrypt-as-promised');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

module.exports = router;
