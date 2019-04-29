const express = require("express");
const app = express();


app.use(require("./userRoute"));
app.use(require("./loginRoute"));
app.use(require("./typeRoute"));
app.use(require("./pedido"));

module.exports = app;