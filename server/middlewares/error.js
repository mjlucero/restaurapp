"use strict";

// Express error handler
const { ResourceNotFound } = require("./../errors");
const { code } = require("./../errors/symbols");

const notFoundHandler = (req, res, next) => next(new ResourceNotFound());

const errorHandler = (err, req, res, next) => {
  console.log(err);

  const message = err[code] ? err.message : "Internal server error";

  res.status(err[code] || 500).json({ message });
};

module.exports = [notFoundHandler, errorHandler];
