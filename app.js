const express = require("express");
const http = require("http");

const path = require("path");
const socketIO = require("socket.io");
const app = express();
//vinculamos express con nuestro servidor http
const server = http.createServer(app);

const publicPath = path.resolve(__dirname, "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server);
const { io } = require("./sockets/socket");

server.listen(port, err => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
