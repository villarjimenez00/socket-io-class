const socket = io();

//recogemos los parametros que vengan por la url

const params = new URLSearchParams(window.location.search);

//escuchamos la conexion
//podemos recogerla desde el back
socket.on("connect", () => {
  console.log("conectado al server");
});

socket.on("disconnect", () => {
  console.log("desconectado del server");
});

socket.emit("sendMessage", { user: "alex", message: "hi world" }, data => {
  console.log(data);
});
//recogemos el emit que hemos hecho desde el back
socket.on("sendMessage", data => {
  console.log({ data: data });
});

socket.emit("chatJoin", { name: params.get("name") });
