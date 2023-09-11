const { Cart } = require("../models");

// cart
const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};

// Get cart list
const getCartList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Cart.find();
};

// Get cart by name
const getCartByName = async (cart_name) => {
  return Cart.findOne({ cart_name });
};

// Get cart details by id
const getCartById = async (cartId) => {
  return Cart.findById(cartId);
};

// update cart
const updateDetails = async (cartId, reqBody) => {
  return Cart.findByIdAndUpdate(cartId, { $set: reqBody });
};

// Delete cart
const deleteCart = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
};

module.exports = {
    createCart,
    getCartList,
    getCartByName,
    getCartById,
    updateDetails,
    deleteCart
}