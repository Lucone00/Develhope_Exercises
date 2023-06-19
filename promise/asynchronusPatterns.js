import { EventEmitter } from "events";

//event emitter instance
const emitter = new EventEmitter();
// Attach an event listener for the 'data' event
emitter.on("data", (data) => {
  console.log(data);
});
// Emit a 'data' event every second.
setInterval(() => {
  emitter.emit("data", "this is some data");
}, 1000);
