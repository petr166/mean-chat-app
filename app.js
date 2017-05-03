const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const io = require('./chat/io');

// import routes
const usersRoutes = require('./routes/users');
const messagesRoutes = require('./routes/messages');

// connect to database
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log("connected to database:", config.database);
});
mongoose.connection.on('error', (err) => {
  console.log("database error:", err.message);
});

// initialize the app
const app = express();

// PORT
const port = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
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

const server = app.listen(port, () => {
  console.log("Express server is listening on", port);
});

// initialize the chat handler
io(server);
