const error = {
  PRODUCT_NOT_FOUND: 404,
  SALE_NOT_FOUND: 404,
};

const errorMap = (type) => error[type] || 500;

module.exports = {
  error,
  errorMap,
};
