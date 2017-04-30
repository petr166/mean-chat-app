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

// authenticate
// router.post('/authenticate', (req, res, next) => {
//   let body = req.body;
//
//   User.getUserByUsername(body.username, (err, user) => {
//     if (err) throw err;
//     if (!user) {
//       return res.json({success: false, msg: "User not found"});
//     }
//
//     User.comparePassword(body.password, user.password, (err, isMatch) => {
//       if (err) throw err;
//       if (isMatch) {
//         let token = jwt.sign(user, config.secret, {
//           expiresIn: 604800
//         });
//
//         res.json({
//           success: true,
//           token: "JWT " + token,
//           user: {
//             id: user._id,
//             name: user.name,
//             username: user.username,
//             email: user.email
//           }
//         });
//       } else {
//         return res.json({success: false, msg: "Wrong username or password"});
//       }
//     });
//   });
// });

router.post("/authenticate", (req, res, next) => {
  let body = req.body;
  let response = {success: false};

  User.authenticate(body.username, body.password, (err, user) => {
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
  res.json({user: req.user});
});

module.exports = router;
