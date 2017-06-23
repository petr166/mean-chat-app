const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/index');
const io = require('./chat/io');
const initMongo = require('./config/mongo');

// import routes
const usersRoutes = require('./routes/users');
const messagesRoutes = require('./routes/messages');

// connect to database
initMongo();

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
app.use('/users', usersRoutes);
app.use('/messages', messagesRoutes);

app.get('/', (req, res) => {
  res.send("Invalid Endpoint");
});

// set front-end entry
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const server = app.listen(config.server.port, () => {
  console.log(`Express server is listening on ${config.server.port}...`);
});

// initialize the chat handler
io(server);
