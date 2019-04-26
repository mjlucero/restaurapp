"use strict";

const { code } = require("./symbols");

class ResourceNotFound extends Error {
  constructor(message = "Not found") {
    super(message);

    this.name = "ResourceNotFound";
    this[code] = 404;
  }
}

module.exports = ResourceNotFound;
