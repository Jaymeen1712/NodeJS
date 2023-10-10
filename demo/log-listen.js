const Logger = require("./logger");

const log = new Logger();

log.on("meslog", () => {
  console.log("message Event log");
});

log.log("message");
