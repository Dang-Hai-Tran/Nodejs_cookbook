// Import net module
import * as net from "net";

const PORT = "8080";
// Create a server and listen server
net
  .createServer((socket) => {
    console.log("Client connected.");
    socket.on("data", (name) => {
      socket.write(`Hello ${name}!`);
    });
  })
  .listen(PORT);

// Add some socket listener
