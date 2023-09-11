const Joi = require("joi");

/** create subcategory */
const subcreateCategory = {
  body: Joi.object().keys({
    subcategory_name: Joi.string().required().trim(),
    subcategory_desc: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
  }),
};

module.exports = {
    subcreateCategory
}