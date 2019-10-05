const Order = require("../models/order");
const { setSubtotalOfDetails } = require("../utils");

export const createOrder = (date, number, state, estimatedTimeEnd, shippingType, details, client) => {
  setSubtotalOfDetails(details);

  let order = new Order({
    date,
    number,
    state,
    estimatedTimeEnd,
    shippingType,
    details,
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
