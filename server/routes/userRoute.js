const express = require("express");
const app = express();

const bcrypt = require("bcrypt");
const _ = require("underscore");

const User = require("../models/user");
const userController = require("../controllers/userController");
const asyncHandler = require("../middlewares/async-handler");
const { verifyToken } = require('../middlewares/auth');

app.get("/user", verifyToken, async (req, res, next) => {
  let from = req.query.from || 0;
  from = Number(from);

  let limit = req.query.limit || 5;
  limit = Number(limit);

  let users = await userController.getUsers(from, limit);

  res.json({
    ok: true,
    users
  });
});

app.get("/user/:id", async function (req, res) {
  let id = req.params.id;

  let user = await userController.getUser(id);

  res.json({
    ok: true,
    user
  });
});

app.post("/user", asyncHandler(async function (req, res) {
  let body = req.body;

  let user = new User({
    name: body.name,
    lastname: body.lastname,
    telephone: body.telephone,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10)
  });

  let userDB = await userController.createUser(user);

  res.json({
    ok: true,
    user: userDB
  });
}));

app.put("/user/:id", async function (req, res) {
  let id = req.params.id;
  let body = _.pick(req.body, [
    "name",
    "lastname",
    "telephone",
    "email",
    "img",
    "role",
    "active"
  ]);

  let userUpdated = await userController.updateUser(id, body);

  res.json({
    ok: true,
    user: userUpdated
  });
});

app.delete("/usuario/:id", async function (req, res) {
  let id = req.params.id;

  let userDeleted = await userController.deleteUser(id);

  res.json({
    ok: true,
    user: userDeleted
  });
});

module.exports = app;
