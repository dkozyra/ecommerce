const pool = require("../db");
const {
  getAllUsersQuery,
  getUserByIdQuery,
  checkEmailQuery,
  createUserQuery,
  updateUserQuery,
  deleteUserQuery,
} = require("../queries/users");

// const getAllUsers = (req, res) => {
//   pool.query(getAllUsersQuery, (error, results) => {
//     if (error) throw error;
//     return res.status(200).json(results.rows);
//   });
// };

// async version
const getAllUsers = async (req, res) => {
  try {
    const users = await pool.query(getAllUsersQuery);
    res.status(200).json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// const getUser = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query(getUserByIdQuery, [id], (error, results) => {
//     if (error) throw error;
//     return res.status(200).json(results.rows);
//   });
// };

// async version
const getUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await pool.query(getUserByIdQuery, [id]);
    res.status(200).json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// const createUser = (req, res) => {
//   //payload
//   const { first_name, last_name, email, password, registered } = req.body;
//   //check if email exists
//   pool.query(checkEmailQuery, [email], (error, results) => {
//     if (results.rows.length) {
//       return res.status(409).send("email already exist");
//     }
//     //create new user
//     pool.query(
//       createUserQuery,
//       [first_name, last_name, email, password, registered],
//       (error, results) => {
//         if (error) throw error;
//         return res.status(201).json("customer created successfully");
//       }
//     );
//   });
// };

// async version
const createUser = async (req, res) => {
  try {
    //payload
    const { first_name, last_name, email, password, registered } = req.body;
    //check if email exists
    const checkEmail = await pool.query(checkEmailQuery, [email]);
    if (checkEmail.rows.length) {
      return res.status(409).send("email already exist");
    }
    //create new user
    await pool.query(createUserQuery, [
      first_name,
      last_name,
      email,
      password,
      registered,
    ]);
    res.status(201).send("customer created successfully");
  } catch (err) {
    console.error(err.message);
  }
};

// const updateUser = (req, res) => {
//   const id = req.params.id;
//   //check if user exists
//   pool.query(getUserByIdQuery, [id], (error, results) => {
//     if (!results.rows.length) {
//       return res.status(404).send("user does not exist");
//     }
//     //payload
//     const { first_name, last_name, email, password, registered } = req.body;
//     //update existing user
//     pool.query(
//       updateUserQuery,
//       [first_name, last_name, email, password, registered, id],
//       (error, results) => {
//         if (error) throw error;
//         return res.status(200).send("customer updated successfully");
//       }
//     );
//   });
// };

// async version
const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    //check if user exists
    const checkUser = await pool.query(getUserByIdQuery, [id]);
    if (!checkUser.rows.length) {
      return res.status(404).send("user does not exist");
    }
    // payload
    const { first_name, last_name, email, password, registered } = req.body;
    //update existing user
    await pool.query(updateUserQuery, [
      first_name,
      last_name,
      email,
      password,
      registered,
      id,
    ]);
    res.status(200).send("customer updated successfully");
  } catch (err) {
    console.error(err.message);
  }
};

// const deleteUser = (req, res) => {
//   const id = parseInt(req.params.id);
//   //check if user exists
//   pool.query(getUserByIdQuery, [id], (error, results) => {
//     if (!results.rows.length) {
//       return res.status(404).send("user does not exist");
//     }
//     //delete existing user
//     pool.query(deleteUserQuery, [id], (error, results) => {
//       if (error) throw error;
//       return res.status(200).json("customer deleted successfully");
//     });
//   });
// };

// async version
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    //check if user exists
    const checkUser = await pool.query(getUserByIdQuery, [id]);
    if (!checkUser.rows.length) {
      return res.status(404).send("user does not exist");
    }
    //delete existing user
    await pool.query(deleteUserQuery, [id]);
    res.status(200).json("customer deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
