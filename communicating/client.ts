import * as net from "net";

const PORT = 8080;
const socket = net.connect(PORT);
socket.write("Dang Hai");
socket.on("data", (data) => {
  console.log(data.toString());
});
