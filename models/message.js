const mongoose = require('mongoose');

// message schema
const MessageSchema = mongoose.Schema({
  created: {
    type: Date,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

MessageSchema.statics.addMessage = (message, callback) => {
  message.save(callback);
};

MessageSchema.statics.getMessages = (callback) => {
  Message.find({}, callback);
};


const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
