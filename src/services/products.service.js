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
  const result = !product ? { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }
    : { type: null, message: product };
  return result;
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
  return { type: findProduct.type, message: findProduct.message };
};

const deleteById = async (id) => {
  const { type, message } = await findById(id);
  if (type) return { type, message };
  await productsModel.deleteById(id);
  return { type: null };
};

const searchProductsByName = async (name) => {
  console.log('name', name);
  const sale = await productsModel.searchProductsByName(`%${name}%`);
  console.log('sale', sale);
  const result = !sale.length ? { type: 'SALE_NOT_FOUND', message: 'Sale not found' }
    : { type: null, message: sale };
  return result;
};

module.exports = {
  findAll,
  findById,
  insertNewProduct,
  updateProduct,
  deleteById,
  searchProductsByName,
};
