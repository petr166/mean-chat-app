const mongoose = require('mongoose');
const Promise = require('bluebird');
const config = require('./index');
const log = require('../log');


mongoose.Promise = Promise; // plug-in bluebird as mongoose Promise

// to export: init mongo connection, set logging
const init = () => {
  connectMongo();
  mongoose.connection.on('connected', () => log.log('mongo', `connected to db: "${config.mongo.host}"`));
  mongoose.connection.on('error', err => log.err('mongo', 'error', err.message || err));
};


// connect to mongo host, set retry on initial fail
const connectMongo = () => {
  mongoose.connect(config.mongo.host, config.mongo.options)
    .catch(err => {
      log.err('mongo', 'connection to db failed', err.message || err);
      setTimeout(connectMongo, 2000);
    });
}


module.exports = init;
