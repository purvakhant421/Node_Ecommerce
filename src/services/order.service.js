const { Order } = require("../models");

// order
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

// Get order list
const getOrderList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Order.find();
};

// Get Order by name
const getOrderByName = async (order_name) => {
  return Order.findOne({ order_name });
};

// Get Order details by id
const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};

// update order
const updateDetails = async (orderId, reqBody) => {
  return Order.findByIdAndUpdate(orderId, { $set: reqBody });
};

// Delete order
const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

module.exports = {
    createOrder,
    getOrderList,
    getOrderByName,
    getOrderById,
    updateDetails,
    deleteOrder
}