require("./config/config");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const errorHandlers = require("./middlewares/error");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(errorHandlers);

app.use(require("./routes/userRoute"));
app.use(require("./routes/typeRoute"));
app.use(require("./routes/pedido"));

mongoose.connect(
  process.env.URL_DB,
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
  (err, res) => {
    if (err) throw err;

    app.listen(process.env.PORT);
    console.log("Base de datos online");
    console.log("App corriendo en el puerto " + process.env.PORT);
  }
);
