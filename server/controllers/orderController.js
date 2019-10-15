const Order = require("../models/order");
const { getSubtotalOfDetails } = require("../utils");

const createOrder = (date, number, state, estimatedTimeEnd, shippingType, details, client) => {
  let mappedDetails = getSubtotalOfDetails(details);

  let order = new Order({
    date,
    number,
    state,
    estimatedTimeEnd,
    shippingType,
    details: mappedDetails,
    client
  });

  return order.save();
};

const updateOrder = (id, date, number, state, estimatedTimeEnd, shippingType, details, client) => {
  let order = {
    date,
    number,
    state,
    estimatedTimeEnd,
    shippingType,
    details,
    client
  };

  return Order.findOneAndUpdate(id, order, { new: true, runValidators: true });
};

const getOrders = async (from, limit) => {
  let orders = await Order.find({})
    .skip(from)
    .limit(limit);

  let total = await Order.countDocuments({});

  return {
    orders,
    total
  };
};

const getOrderById = id =>
  Order.findById(id)
    .populate("client", "name lastname telephone email")
    .populate("details.article.detail", "denomination salePrice")
    .populate("details.manufacturedArticle.detail", "denomination salePrice");

module.exports = {
  createOrder,
  updateOrder,
  getOrders,
  getOrderById
};
