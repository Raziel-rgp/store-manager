const connection = require('./connection');

// req 1
// accesses db and return it
const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY ID',
  );
  return products;
};

// req 1
// accesses db and search by id and return it
const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ORDER BY id ASC',
    [productId],
  );
  return product;
};

// req 3

const insertNewProduct = async (productName) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [productName.product],
  );
  return insertId;
};

const updateProduct = async (id, update) => {
  const [product] = await connection.execute(`
    UPDATE StoreManager.products SET name = ? WHERE id = ?`,
    [update, id]);
  return product;
};

const deleteById = async (id) => {
  const result = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ? ', [id],
  );
  return result;
};

module.exports = {
  findAll,
  findById,
  insertNewProduct,
  updateProduct,
  deleteById,
};
