// get configs from environment
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;
const MONGO_HOST = process.env.MONGO_HOST || 'mongodb://localhost/chat-app';
const SECRET = process.env.SECRET || 'supersecretalltheway';
const ROOT = process.env.ROOT || '';
const CHAT_PATH = process.env.CHAT_PATH || '/chat-path';

// init config obj containing the app settings
const config = {
  env: NODE_ENV,
  root: ROOT,
  server: {
    port: PORT,
  },
  mongo: {
    host: MONGO_HOST,
    options: {
      server: {
        reconnectTries: Number.MAX_VALUE,
      },
    },
  },
  secret: SECRET,
  chatPath: CHAT_PATH,
};

module.exports = config;
