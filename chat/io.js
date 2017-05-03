const socketIo = require('socket.io');

const initialize = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    socket.emit("welcome", {
      msg: "Welcome to the chat server!"
    });

    console.log("a user connected");

    socket.on("message", (data) => {
      socket.broadcast.emit("message", data);
      console.log(data.from + ": " + data.text);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}

module.exports = initialize;
