const express = require('express');
const User = require('../models/User');
var md5 = require('md5');
const router = express.Router();

router.get('/', (req, res) => {
  return res.render('login');
});

router.post('/', (req, res) => {
  const username = req.body.username;
  const password = md5(req.body.password);

  User.findOne({ email: username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.render('secrets');
        }
      }
    }
  });
});

module.exports = router;
