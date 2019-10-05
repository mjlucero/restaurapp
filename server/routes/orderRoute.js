const express = require("express");
const app = express();

const orderController = require("../controllers/orderController");
const asyncHandler = require("../middlewares/async-handler");

app.post(
  "/order",
  asyncHandler(async (req, res, next) => {
    let { date, number, state, estimatedTimeEnd, shippingType, details, client } = req.body;

    let newOrder = await orderController.createOrder(
      date,
      number,
      state,
      estimatedTimeEnd,
      shippingType,
      details,
      client
    );

    res.json({
      ok: true,
      order: newOrder
    });
  })
);

module.exports = app;
