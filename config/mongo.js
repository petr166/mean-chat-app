const mongoose = require('mongoose');
const Promise = require('bluebird');
const config = require('./index');
const log = require('../log');

mongoose.Promise = Promise;

const init = () => {
  connectMongo();
  mongoose.connection.on('connected', () => log.log('mongo', `connected to db: ${config.mongo.host}`));
  mongoose.connection.on('error', err => log.report('mongo', 'error', err.message || err));
};


const connectMongo = () => {
  mongoose.connect(config.mongo.host, config.mongo.options)
          .catch(err => {
            log.report('mongo', 'connection to db failed', err.message || err);
            setTimeout(connectMongo, 2000);
          });
}


module.exports = init;
