const { io } = require("../app");
const UsersClass = require("../classes/users");
const User = new UsersClass();

module.exports = io.on("connection", client => {
  console.log("usuario conectado back");

  client.on("chatJoin", data => {
    const user = User.addUser({
      name: data.name,
      id: client.id
    });
    //return this.users;
  });

  //escuchamos la desconexion del cliente
  //podemos escuchar todos los eventos  que emitamos
  //desde el front
  client.on("disconnect", () => {
    console.log("usuario desconectado");
    const userDisconnected = User.deleteUser(client.id);
    client.broadcast.emit("userDisconnect", userDisconnected);
  });
  client.on("sendMessage", (data, callback) => {
    console.log(data);
    /*   if (!data.user) callback({ message: "debe proporcionar un usuario" });
    callback(`Hola ${data.user}`); */

    client.broadcast.emit("sendMessage", data);
  });
});
