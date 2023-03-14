const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(`SELECT date, product_id AS productId, quantity,
    sale_id AS saleId FROM StoreManager.sales_products JOIN StoreManager.sales
    ON id = StoreManager.sales_products.sale_id`);
  return camelize(result);
};

const findById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT date, product_id AS productId, quantity FROM StoreManager.sales_products
    JOIN StoreManager.sales ON id = StoreManager.sales_products.sale_id
    WHERE id = ? ORDER BY product_id`, [id],
  );

  return camelize(sale);
};

const insertNewSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (NOW())',
  );
  return insertId;
};

const insertSale = async (insertId, sale) => {
  connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [insertId, sale.productId, sale.quantity],
  );
};

const validateId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ? ', [id],
  );
  return camelize(result);
};

const deleteById = async (id) => {
  const result = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ? ', [id],
  );
  return result;
};

/* const updateProduct = async (id, update) => {
  const [product] = await connection.execute(`
    UPDATE StoreManager.sales_product SET quantity = ? WHERE sale_id = ? AND product_id = ?`,
    [update.quantity, id, update.productId]);
  return product;
}; */

module.exports = {
  insertNewSale,
  insertSale,
  findAll,
  findById,
  validateId,
  deleteById,
/*   updateProduct, */
};