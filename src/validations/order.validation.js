const Joi = require("joi");

/** create order */
const createOrder = {
  body: Joi.object().keys({
    email:Joi.string().required().trim(),
        order_status : Joi.string().required().trim(),
        delivery_address: Joi.string().required().trim(),
        payment_method: Joi.string().required().trim(),
        total_items: Joi.number().integer().required(),
        total_price: Joi.number().required()
  }),
};

module.exports = {
    createOrder
}