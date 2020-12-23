const express = require('express');
const User = require('../models/User');
const router = express.Router();
var md5 = require('md5');
router.get('/', (req, res) => {
  return res.render('register');
});

router.post('/', async (req, res) => {
  const email = req.body.username;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).render('usernot');
    }

    user = new User({
      email: req.body.username,
      password: md5(req.body.password)
    });
    user.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.render('secrets');
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

module.exports = router;
