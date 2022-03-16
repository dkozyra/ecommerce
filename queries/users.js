const getAllUsersQuery = "SELECT * FROM customer";
const getUserByIdQuery = "SELECT * FROM customer WHERE id = $1";
const checkEmailQuery = "SELECT first_name FROM customer WHERE email = $1";
const createUserQuery =
  "INSERT INTO customer (first_name, last_name, email, password, registered) VALUES ($1, $2, $3, $4, $5)";
const updateUserQuery =
  "UPDATE customer SET first_name = $1, last_name = $2, email = $3, password = $4, registered = $5 WHERE id = $6";
const deleteUserQuery = "DELETE FROM customer WHERE id = $1";

module.exports = {
  getAllUsersQuery,
  getUserByIdQuery,
  checkEmailQuery,
  createUserQuery,
  updateUserQuery,
  deleteUserQuery,
};
