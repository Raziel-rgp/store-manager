const { saleModel } = require('../models');

// ajuda Breno Garrido 25B
const insertNewSale = async (sales) => {
  const date = new Date();
  const ids = await saleModel.insertNewSale(date);
  await Promise.all(sales.map(async (sale) => saleModel.insertSale(ids, sale)));
  const result = { id: ids, itemsSold: sales };
  return { type: null, message: result };
};

const findAll = async () => {
  const result = await saleModel.findAll();
  return { type: null, message: result };
};

const findById = async (id) => {
  const sale = await saleModel.findById(id);
  const result = !sale.length ? { type: 'SALE_NOT_FOUND', message: 'Sale not found' }
    : { type: null, message: sale };
  return result;
};

const deleteById = async (id) => {
  const validate = await saleModel.validateId(id);
  const result = !validate ? { type: 404, message: 'Sale not found' }
    : await saleModel.deleteById(id) && { type: null, message: '' };
  return result;
};

module.exports = {
  insertNewSale,
  findAll,
  findById,
  deleteById,
};
