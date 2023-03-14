const Joi = require('joi');

const seleSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().strict().integer().min(1)
    .required(),
});

module.exports = {
  seleSchema,
};
