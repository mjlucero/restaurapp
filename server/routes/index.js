const express = require("express");
const app = express();

app.use(require("./userRoute"));
app.use(require("./loginRoute"));
app.use(require("./typeRoute"));
app.use(require("./articleRoute"));
app.use(require("./manufacturedArticleRoute"));
app.use(require("./orderRoute"));

module.exports = app;
