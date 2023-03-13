const { productService } = require('../services');
const { errorType } = require('../utils');

const findAll = async (_req, res) => {
  const { message } = await productService.findAll();
  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(id);
  
  const result = type ? res.status(errorType.errorMap(type)).json({ message })
    : res.status(200).json(message);
  return result;
};

module.exports = {
  findAll,
  findById,
};
