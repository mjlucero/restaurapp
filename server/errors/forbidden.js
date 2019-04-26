"use strict";

class Forbidden extends Error {
  constructor(message = "Forbidden") {
    super(message);

    this.name = "Forbidden";
    this.code = 403;
  }
}

module.exports = Forbidden;
