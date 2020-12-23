const express = require('express');
const Secret = require('../models/Secret');
const router = express.Router();

router.get('/', (req, res) => {
  return res.render('submit');
});

router.post('/', (req, res) => {
    const secret = new Secret({
        secret: req.body.secret
    });
    secret.save((err) => {
        if (err) {
          console.log(err);
        } else {
          res.render('secrets');
        }
      });
});

module.exports = router;