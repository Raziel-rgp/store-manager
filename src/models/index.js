// to use something like: const product = await productsModel.findById(productId);
const productsModel = require('./products.model');
const saleModel = require('./sales.model');

module.exports = { productsModel, saleModel };