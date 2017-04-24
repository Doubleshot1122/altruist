const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

router.get('/register', function(req, res, next) {
  res.render('login', {title : 'Welcome', action : 'register'});
});

router.get('/login', function(req, res, next) {
  res.render('login', {title : 'Welcome', action : 'login'});
});
module.exports = router;
