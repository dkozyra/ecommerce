const getAllProductsQuery = "SELECT * FROM product";
const getProductByIdQuery = "SELECT * FROM product WHERE id = $1";
const createProductQuery =
  "INSERT INTO product (name, price, description, created, stock_qty) VALUES ($1, $2, $3, $4, $5)";
const updateProductQuery =
  "UPDATE product SET name = $1, price = $2, description = $3, created = $4, stock_qty = $5 WHERE id = $6";
const deleteProductQuery = "DELETE FROM product WHERE id = $1";

module.exports = {
  getAllProductsQuery,
  getProductByIdQuery,
  createProductQuery,
  updateProductQuery,
  deleteProductQuery,
};
