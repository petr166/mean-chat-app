const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// register
router.post('/register', (req, res, next) => {
  let body = req.body;
  let response = {success: false};

  if (!(body.password == body.confirmPass)) {
    response.msg = "The confirmed password doesn't match";
    res.json(response);
  } else {
    let newUser = new User({
      username: body.username,
      password: body.password,
    });

    User.addUser(newUser, (err, user) => {
      if (err) {
        response.msg = err.msg || "Failed to register user";
        res.json(response);
      } else {
        response.success = true;
        response.msg = "User registered successfuly";
        response.user = {
          id: user._id,
          username: user.username
        }
        res.json(response);
      }
    });
  }
});

router.post("/authenticate", (req, res, next) => {
  let body = req.body;
  let response = {success: false};

  User.authenticate(body.username.trim(), body.password.trim(), (err, user) => {
    if (err) {
      response.msg = err.msg;
      res.json(response);
    } else { // create the unique token for the user
        let signData = {
          id: user._id,
          username: user.username
        };
        let token = jwt.sign(signData, config.secret, {
          expiresIn: 604800
        });

        response.token = "JWT " + token;
        response.user = signData;
        response.success = true;
        response.msg = "User authenticated successfuly";

        res.json(response);
    }
  });
});

// profile
router.get('/profile', passport.authenticate("jwt", {session: false}), (req, res, next) => {
  let response = {success: true};
  response.user = req.user;
  res.json(response);
});

module.exports = router;
