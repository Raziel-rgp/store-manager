const express = require('express');
const { productsControllers } = require('../controllers');
const validadeName = require('../middlewares/validateName');

const productRouter = express.Router();

productRouter.get('/search', productsControllers.searchProductsByName);
productRouter.get('/', productsControllers.findAll);
productRouter.get('/:id', productsControllers.findById);
productRouter.post('/', validadeName, productsControllers.insertNewProduct);
productRouter.put('/:id', validadeName, productsControllers.updateProduct);
productRouter.delete('/:id', productsControllers.deleteById);

module.exports = productRouter;
