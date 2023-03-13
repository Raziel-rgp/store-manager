const connection = require('./connection');

// accesses db and return it
const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY ID',
  );
  return products;
};

// accesses db and search by id and return it
const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ORDER BY id ASC',
    [productId],
  );
  return product;
};

module.exports = {
  findAll,
  findById,
};
