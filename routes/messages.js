const express = require('express');
const router = express.Router();
const passport = require('passport');

// get messages
router.get('/', passport.authenticate("jwt", {session: false}), (req, res, next) => {
  let response = {success: true};
  // get from db
  response.messages = [
    {from: "petru", created: new Date(), text: "esti varza"},
    {from: "alin", created: new Date(), text: "marsh wa"},
    {from: "marius", created: new Date(), text: "taci am intrebat"},
    {from: "cornel", created: new Date(), text: "sunteti praf"},
    {from: "petru", created: new Date(), text: "esti varza"},
    {from: "alin", created: new Date(), text: "marsh wa"},
    {from: "marius", created: new Date(), text: "taci am intrebat"},
    {from: "cornel", created: new Date(), text: "sunteti praf"},
    {from: "petru", created: new Date(), text: "esti varza"},
    {from: "alin", created: new Date(), text: "marsh wa"},
    {from: "marius", created: new Date(), text: "taci am intrebat"},
    {from: "cornel", created: new Date(), text: "sunteti praf"},
    {from: "petru", created: new Date(), text: "esti varza"},
    {from: "alin", created: new Date(), text: "marsh wa"},
    {from: "marius", created: new Date(), text: "taci am intrebat"},
    {from: "cornel", created: new Date(), text: "sunteti praf"}
  ];
  res.json(response);
});

module.exports = router;
