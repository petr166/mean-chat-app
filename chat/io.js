const socketIo = require('socket.io');
const Message = require('../models/message');

const users = [];
const connections = [];

const initialize = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    connections.push(socket);
    socket.join("chat-room");

    socket.emit("welcome", {
      msg: "Welcome to the chat server!"
    });

    socket.on("username", (data) => {
      if (data.username) {
        socket.username = data.username;
        let user = { username: socket.username, id: socket.id };
        let existing = searchUser(user.username);
        if (existing == false) {
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
        let user = searchUser(data.to);
        if (user != false) {
          let instances = searchConnections(data.to);
          if (instances.length > 0) {
            for (let instance of instances) {
              socket.broadcast.to(instance.id).emit("message", data.message);
            }
            let myOtherInstances = searchConnections(socket.username);
            if (myOtherInstances.length > 1) {
              for (let conn of myOtherInstances) {
                // exclude me
                if (conn != socket) {
                  socket.broadcast.to(conn.id).emit("message", data.message);
                }
              }
            }
          }
        }
      }
      console.log("[%s].to(%s)<< %s", data.message.from, data.to, data.message.text);

      // save the message to the database
      let message = new Message(data.message);
      Message.addMessage(message, (err, newMsg) => {});
    });

    socket.on("disconnect", () => {
      let instances = searchConnections(socket.username);
      if (instances.length == 1) {
        let user = searchUser(socket.username);
        if (user != false) {
          users.splice(users.indexOf(user), 1);
        }
      }

      io.emit("active", users);
      console.log("[%s] disconnected", socket.username);
      console.log("<users>:", users);

      let connIndex = connections.indexOf(socket);
      if (connIndex > -1) {
        connections.splice(connIndex, 1);
      }
    });
  });
};

const searchUser = (username) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      return users[i];
    }
  }

  return false;
};

const searchConnections = (username) => {
  let found = [];
  for (let conn of connections) {
    if (conn.username == username) {
      found.push(conn);
    }
  }

  if (found.length > 0) {
    return found;
  } else {
    return false;
  }
}

module.exports = initialize;
