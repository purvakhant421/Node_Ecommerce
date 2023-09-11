const Joi = require("joi");

/** create cart */
const createCart = {
  body: Joi.object().keys({
    email:Joi.string().required().trim(),
    total_items:Joi.number().required(),
    total_price:Joi.number().required(),
    coupon_code:Joi.string().required().trim()
  }),
};

module.exports = {
    createCart
}