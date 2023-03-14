const { productService } = require('../services');
const { errorType } = require('../utils');

// req 1

const findAll = async (_req, res) => {
  const { message } = await productService.findAll();
  return res.status(200).json(message);
};

// req 1

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.findById(id);
  
  const result = type ? res.status(errorType.errorMap(type)).json({ message })
    : res.status(200).json(message);
  return result;
};

// req 3

const insertNewProduct = async (req, res) => {
  const { name } = req.body;
  const resultado = await productService.insertNewProduct(name);
  return res.status(201).json(resultado);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productService.updateProduct(id, name);
  console.log('type', type);
  console.log('message', message);
  const result = type ? res.status(errorType.errorMap(type)).json({ message })
    : res.status(200).json(message);
  return result;
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.deleteById(id);
  const result = type ? res.status(errorType.errorMap(type)).json({ message })
    : res.status(204).end();
  return result;
};

module.exports = {
  findAll,
  findById,
  insertNewProduct,
  updateProduct,
  deleteById,
};
