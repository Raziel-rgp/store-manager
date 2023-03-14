const { saleService } = require('../services');
const { errorType } = require('../utils');

const findAll = async (_req, res) => {
  const { message } = await saleService.findAll();
  return res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.findById(id);

  const result = type ? res.status(errorType.errorMap(type)).json({ message })
    : res.status(200).json(message);
  return result;
};

const insertSales = async (req, res) => {
  const sales = req.body;
  const { type, message } = await saleService.insertNewSale(sales);

  const result = type ? res.status(errorType(type)).json({ message })
    : res.status(201).json(message);
  return result;
};

module.exports = {
  insertSales,
  findAll,
  findById,
};
