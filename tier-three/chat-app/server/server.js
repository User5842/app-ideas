const express = require("express");
const { Server } = require("socket.io");

const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve(__dirname, "..", "client", "public")));

app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "index.html"));
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  console.log(username);

  if (!username) {
    return next(new Error("Invalid username."));
  }

  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  socket.broadcast.emit("user connected", socket.username);

  socket.on("chat message", (msg) => {
    io.emit("chat message", { message: msg, username: socket.username });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
