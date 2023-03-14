const express = require('express');
const { requireId,
  requireQuantity,
  validateQuantity,
  validateId,
  validateProduct } = require('../middlewares/sale.middlewares');
const { salesControllers } = require('../controllers');

const salesRouter = express.Router();
salesRouter.post('/', requireId, requireQuantity, validateQuantity, validateId, validateProduct,
  salesControllers.insertSales);
salesRouter.get('/', salesControllers.findAll);
salesRouter.get('/:id', salesControllers.findById);

module.exports = salesRouter;