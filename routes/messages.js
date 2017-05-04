const express = require('express');
const router = express.Router();
const passport = require('passport');
const Message = require('../models/message');

// get messages
router.get('/', passport.authenticate("jwt", {session: false}), (req, res, next) => {
  let response = {success: true};
  Message.getMessages((err, messages) => {
    if (err) {
      response.success = false;
      response.msg = "There was an error on getting the message list";
      res.json(response);
    } else {
      response.msg = "Message list retrieved successfuly";
      response.messages = messages;
      res.json(response);
    }
  });
});

module.exports = router;
