const express = require('express');
const router = express.Router();
const knex = require('../db');
const bcrypt = require('bcrypt-as-promised');

router.post('/', (req, res, next) => {
  console.log("hi",req.body);
  const { user_name, password } = req.body;
  let error = {};
  if (!user_name || !user_name.trim()) {
    error.status = 200
    error.user = 'Username must not be blank'

  }
  if (!password) {
    error.status = 200
    error.password ='Password must not be blank'
  }

  //res.render('nonprofits/login', {error});

  let user;

  knex('users')
    .where({user_name})
    .first()
    .then((row) => {
      if (!row) {
        error.message = 'This username does not exist'
        res.render('nonprofits/login', {error});
      }
      user = row;
      return bcrypt.compare(password, password);
    })
    .then(() => {
      delete user.password;
      req.session.user_name = user.user_name;
      res.render(`nonprofit/profile/${user.user_name}`);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw {
        status: 400,
        message: 'Bad email or password'
      };
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/session', (req, res, next) => {
  req.session = null;

  res.sendStatus(200);
});
module.exports = router;
