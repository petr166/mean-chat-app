const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const errorMiddleware = require('./middleware/error');
const config = require('./config');

// import routes
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');


// initialize the app
const app = express();

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
require('./config/passport')(passport);

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// set routes
// TODO: change to '/user' and '/message'
app.use(`${config.root}/users`, userRoutes);
app.use(`${config.root}/messages`, messageRoutes);

// set error handling middleware
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send("Invalid Endpoint");
});

// set front-end entry
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


module.exports = app;
