const express = require("express");
const app = express();

const userController = require("../controllers/userController");
const asyncHandler = require("../middlewares/async-handler");

app.post("/login", asyncHandler(async (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;

    //console.log(await userController.loginUser(email, password));
    let loginData = await userController.loginUser(email, password);

    let { userDB, token } = loginData;

    res.json({
        ok: true,
        user: userDB,
        token
    });

}));

module.exports = app;
