"use strict";

const { code } = require("./symbols");

class Unauthorized extends Error {
  constructor(message = "Unauthorized") {
    super(message);

    this.name = "Unauthorized";
    this[code] = 401;
  }
}

module.exports = Unauthorized;
