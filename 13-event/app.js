const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("byungju", (args) => {
  console.log("first callback - ", args);
});

emitter.on("byungju", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("byungju", { message: 1 });
emitter.emit("byungju", { message: 2 });
emitter.emit("byungju", { message: 3 });
