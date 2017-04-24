const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

router.get('/register', function(req, res, next) {
  res.render('register_route', {title : 'Register'});
});

module.exports = router;
