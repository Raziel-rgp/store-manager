const { productsModel } = require('../models');

// after require, it uses findAll func of products.model and return it
const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

// uses findById of products.model and return the result if exist. If dont, return an error
const findById = async (productId) => {
  const product = await productsModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  findAll,
  findById,
};
