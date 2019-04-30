const express = require("express");
const app = express();

const userController = require("../controllers/userController");

const asyncHandler = require("../middlewares/async-handler");
const { verifyToken } = require('../middlewares/auth');

app.get("/user", verifyToken, asyncHandler(async (req, res, next) => {
  let from = req.query.from || 0;
  from = Number(from);

  let limit = req.query.limit || 5;
  limit = Number(limit);

  let response = await userController.getUsers(from, limit);

  res.json({
    ok: true,
    users: response.users,
    total: response.total
  });
}));

app.get("/user/:id", asyncHandler(async function (req, res, next) {
  let id = req.params.id;

  let user = await userController.getUser(id);

  res.json({
    ok: true,
    user
  });
}));

app.post("/user", asyncHandler(async function (req, res) {

  let { name, lastname, telephone, email, password } = req.body;

  //let userDB = await userController.createUser(user);
  let userDB = await userController.createUser(name, lastname, telephone, email, password);

  res.json({
    ok: true,
    user: userDB
  });
}));

app.put("/user/:id", async function (req, res) {
  let id = req.params.id;
  let body = req.body;

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
