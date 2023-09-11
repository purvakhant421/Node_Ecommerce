const Joi = require("joi");

/** create subchildcategory */
const createSubchildcategory = {
  body: Joi.object().keys({
    subchildcategory_name: Joi.string().required().trim(),
    subchildcategory_desc: Joi.string().required().trim(),
    subchildcategory: Joi.string().required().trim(),
  }),
};

module.exports = {
    createSubchildcategory
}