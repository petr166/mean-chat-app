const socketIo = require('socket.io');
const Message = require('../models/message');

const users = [];

const initialize = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    socket.join("chat-room");

    socket.emit("welcome", {
      msg: "Welcome to the chat server!"
    });

    socket.on("username", (data) => {
      if (data.username) {
        socket.username = data.username;
        let user = { username: socket.username, id: socket.id };
        if (searchUser(socket.username) == false) {
          users.push(user);
        }

        io.emit("active", users);
        console.log("[%s] connected", socket.username);
        console.log("<users>:", users);
      }
    });

    socket.on("getactive", () => {
      socket.emit("active", users);
    });

    socket.on("message", (data) => {
      if (data.to == "chat-room") {
        socket.broadcast.to("chat-room").emit("message", data.message);
      } else {
        let userIndex = searchUser(data.to);
        if (userIndex) {
          socket.broadcast.to(users[userIndex].id).emit("message", data.message);
        }
      }
      console.log("[%s].to(%s)<< %s", data.message.from, data.to, data.message.text);

      // save the message to the database
      let message = new Message(data.message);
      Message.addMessage(message, (err, newMsg) => {});
    });

    socket.on("disconnect", () => {
      let userIndex = searchUser(socket.username);
      if (userIndex > -1) {
        users.splice(userIndex, 1);
      }

      io.emit("active", users);
      console.log("[%s] disconnected", socket.username);
      console.log("<users>:", users);
    });
  });
};

const searchUser = (username) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      return i;
    }
  }

  return false;
};

module.exports = initialize;
