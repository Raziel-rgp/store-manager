const express = require('express');
const { productsControllers } = require('../controllers');

const productRouter = express.Router();

productRouter.get('/', productsControllers.findAll);
productRouter.get('/:id', productsControllers.findById);

module.exports = productRouter;
