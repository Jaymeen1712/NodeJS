const { EventEmitter } = require("stream");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    this.emit("meslog");
  }
}

module.exports = Logger