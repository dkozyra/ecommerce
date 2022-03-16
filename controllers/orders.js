const pool = require("../db");
const {
  getAllOrdersQuery,
  getOrderByIdQuery,
  createOrderQuery,
  updateOrderQuery,
  deleteOrderQuery,
} = require("../queries/orders");

// const getAllOrders = (req, res) => {
//   pool.query(getAllOrdersQuery, (error, results) => {
//     if (error) throw error;
//     return res.status(200).json(results.rows);
//   });
// };

// GET ALL async version
const getAllOrders = async (req, res) => {
  try {
    const orders = await pool.query(getAllOrdersQuery);
    res.status(200).json(orders.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// const getOrder = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query(getOrderByIdQuery, [id], (error, results) => {
//     if (error) throw error;
//     return res.status(200).json(results.rows);
//   });
// };

// GET SINGLE async version
const getOrder = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    // if (typeof id !== "number") {
    //   return console.log(id);
    // }
    const order = await pool.query(getOrderByIdQuery, [id]);
    res.status(200).json(order.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// const createOrder = (req, res) => {
//   //payload
//   const { total, status, created, user_id } = req.body;
//   //create new order
//   pool.query(
//     createOrderQuery,
//     [total, status, created, user_id],
//     (error, results) => {
//       if (error) throw error;
//       return res.status(201).json("order created successfully");
//     }
//   );
// };

// CREATE async version
const createOrder = async (req, res) => {
  try {
    //payload
    const { total, status, created, user_id } = req.body;
    //create new order
    await pool.query(createOrderQuery, [total, status, created, user_id]);
    res.status(201).send("order created successfully");
  } catch (err) {
    console.error(err.message);
  }
};

// const updateOrder = (req, res) => {
//   const id = parseInt(req.params.id);
//   //check if order exists
//   pool.query(getOrderByIdQuery, [id], (error, results) => {
//     if (!results.rows.length) {
//       return res.status(404).send("order does not exist");
//     }
//     //payload
//     const { total, status, created, user_id } = req.body;
//     //update existing order
//     pool.query(
//       updateOrderQuery,
//       [total, status, created, user_id, id],
//       (error, results) => {
//         if (error) throw error;
//         return res.status(200).send("order updated successfully");
//       }
//     );
//   });
// };

// UPDATE async version
const updateOrder = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    //check if order exists
    const checkOrder = await pool.query(getOrderByIdQuery, [id]);
    if (!checkOrder.rows.length) {
      return res.status(404).send("order does not exist");
    }
    // payload
    const { total, status, created, user_id } = req.body;
    //update existing order
    await pool.query(updateOrderQuery, [total, status, created, user_id, id]);
    res.status(200).send("oder updated successfully");
  } catch (err) {
    console.error(err.message);
  }
};

// const deleteOrder = (req, res) => {
//   const id = parseInt(req.params.id);
//   //check if order exists
//   pool.query(getOrderByIdQuery, [id], (error, results) => {
//     if (!results.rows.length) {
//       return res.status(404).send("order does not exist");
//     }
//     //delete existing order
//     pool.query(deleteOrderQuery, [id], (error, results) => {
//       if (error) throw error;
//       return res.status(200).json("order deleted successfully");
//     });
//   });
// };

// async version
const deleteOrder = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    //check if order exists
    const checkOrder = await pool.query(getOrderByIdQuery, [id]);
    if (!checkOrder.rows.length) {
      return res.status(404).send("order does not exist");
    }
    //delete existing order
    await pool.query(deleteOrderQuery, [id]);
    res.status(200).json("order deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
