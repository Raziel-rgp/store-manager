const { productsModel } = require('../models/index');

const requireId = (req, res, next) => {
  const sales = req.body;
  const id = sales.every((sale) => sale.productId !== null && sale.productId !== undefined);
  const result = !id ? res.status(400).json({ message: '"productId" is required' })
    : next();
  return result;
};

const requireQuantity = (req, res, next) => {
  const sales = req.body;
  const quantity = sales.every((sale) => sale.quantity !== null && sale.quantity !== undefined);
  const result = !quantity ? res.status(400).json({ message: '"quantity" is required' })
    : next();
  return result;
};

const validateQuantity = (req, res, next) => {
  const sales = req.body;
  const quantity = sales.some((sale) => sale.quantity < 1);
  const result = quantity ? res.status(422)
    .json({ message: '"quantity" must be greater than or equal to 1' })
    : next();
  return result;
};

const validateId = (req, res, next) => {
  const sales = req.body;
  const id = sales.every((sale) => sale.productId !== null && sale.productId !== undefined);
  const result = !id ? res.status(400).json({ message: 'Product not found' })
    : next();
  return result;
};

const validateProduct = async (req, res, next) => {
  const products = req.body;
  const findAll = await Promise.all(products.map(async ({ productId }) => {
    const findById = await productsModel.findById(productId);
    return findById;
  }));

  const e = findAll.every((product) => product !== null && product !== undefined);
  const result = !e ? res.status(404).json({ message: 'Product not found' })
    : next();
  return result;
};

module.exports = {
  requireId,
  requireQuantity,
  validateQuantity,
  validateId,
  validateProduct,
};
