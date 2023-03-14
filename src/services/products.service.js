const { productsModel } = require('../models');

// req 1
// after require, it uses findAll func of products.model and return it
const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

// req 1
// uses findById of products.model and return the result if exist. If dont, return an error
const findById = async (productId) => {
  const product = await productsModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

// req 3

const insertNewProduct = async (product) => {
  const insertProductId = await productsModel.insertNewProduct({ product });
  const insertProduct = await productsModel.findById(insertProductId);
  return insertProduct;
};

const updateProduct = async (id, update) => {
  const { type, message } = await findById(id);
  if (type) return { type, message };
  await productsModel.updateProduct(id, update);
  const findProduct = await findById(id);
  console.log('textokk', findProduct);
  return { type: findProduct.type, message: findProduct.message };
};

module.exports = {
  findAll,
  findById,
  insertNewProduct,
  updateProduct,
};
