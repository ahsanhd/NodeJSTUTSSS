const myEventLogger = require("./eventEmitter").myEventLogger;

const eventEmitter = require("events");

class MyEmitter extends eventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("log", (message) => {
  myEventLogger(message);
});

setTimeout(() => {
  myEmitter.emit("log", "Log event Happened");
}, 2000);
