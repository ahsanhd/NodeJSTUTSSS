const myEventLogger = require("./eventEmitter").myEventLogger;
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const eventEmitter = require("events");

class MyEmitter extends eventEmitter {}

const myEmitter = new MyEmitter();

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// myEmitter.on("log", (message) => {
//   myEventLogger(message);
// });

// setTimeout(() => {
//   myEmitter.emit("log", "Log event Happened");
// }, 2000);
