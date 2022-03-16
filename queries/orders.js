const getAllOrdersQuery = "SELECT * FROM reserve";
const getOrderByIdQuery = "SELECT * FROM reserve WHERE id = $1";
const createOrderQuery =
  "INSERT INTO reserve (total, status, created, user_id) VALUES ($1, $2, $3, $4)";
const updateOrderQuery =
  "UPDATE reserve SET total = $1, status = $2, created = $3, user_id = $4 WHERE id = $5";
const deleteOrderQuery = "DELETE FROM reserve WHERE id = $1";

module.exports = {
  getAllOrdersQuery,
  getOrderByIdQuery,
  createOrderQuery,
  updateOrderQuery,
  deleteOrderQuery,
};
