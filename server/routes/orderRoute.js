const express = require("express");
const app = express();

const orderController = require("../controllers/orderController");
const asyncHandler = require("../middlewares/async-handler");

app.post(
  "/orders",
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

app.get(
  "/orders",
  asyncHandler(async (req, res, next) => {
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 5;
    limit = Number(limit);

    let response = await orderController.getOrders(from, limit);

    res.json({
      ok: true,
      orders: response.orders,
      total: response.total
    });
  })
);

app.get(
  "/orders/:id",
  asyncHandler(async (req, res, next) => {
    let id = req.params.id;

    let order = await orderController.getOrderById(id);

    res.json({
      ok: true,
      order
    });
  })
);

module.exports = app;
