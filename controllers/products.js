const pool = require("../db");
const {
  getAllProductsQuery,
  getProductByIdQuery,
  createProductQuery,
  updateProductQuery,
  deleteProductQuery,
} = require("../queries/products");

// const getAllProducts = (req, res) => {
//   pool.query(getAllProductsQuery, (error, results) => {
//     if (error) throw error;
//     return res.status(200).json(results.rows);
//   });
// };

// GET ALL async version
const getAllProducts = async (req, res) => {
  try {
    const products = await pool.query(getAllProductsQuery);
    res.status(200).json(products.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// const getProduct = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query(getProductByIdQuery, [id], (error, results) => {
//     if (error) throw error;
//     return res.status(200).json(results.rows);
//   });
// };

// GET SINGLE async version
const getProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    // if (typeof id !== "number") {
    //   return console.log(id);
    // }
    const product = await pool.query(getProductByIdQuery, [id]);
    res.status(200).json(product.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// const createProduct = (req, res) => {
//   //payload
//   const { name, price, description, created, stock_qty } = req.body;
//   //create new product
//   pool.query(
//     createProductQuery,
//     [name, price, description, created, stock_qty],
//     (error, results) => {
//       if (error) throw error;
//       return res.status(201).json("product created successfully");
//     }
//   );
// };

// CREATE async version
const createProduct = async (req, res) => {
  try {
    //payload
    const { name, price, description, created, stock_qty } = req.body;
    //create new product
    await pool.query(createProductQuery, [
      name,
      price,
      description,
      created,
      stock_qty,
    ]);
    res.status(201).send("product created successfully");
  } catch (err) {
    console.error(err.message);
  }
};

// const updateProduct = (req, res) => {
//   const id = parseInt(req.params.id);
//   //check if product exists
//   pool.query(getProductByIdQuery, [id], (error, results) => {
//     if (!results.rows.length) {
//       return res.status(404).send("product does not exist");
//     }
//     //payload
//     const { name, price, description, created, stock_qty} = req.body;
//     //update existing product
//     pool.query(
//       updateProductQuery,
//       [name, price, description, created, stock_qty, id],
//       (error, results) => {
//         if (error) throw error;
//         return res.status(200).send("product updated successfully");
//       }
//     );
//   });
// };

// UPDATE async version
const updateProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    //check if product exists
    const checkProduct = await pool.query(getProductByIdQuery, [id]);
    if (!checkProduct.rows.length) {
      return res.status(404).send("product does not exist");
    }
    // payload
    const { name, price, description, created, stock_qty } = req.body;
    //update existing product
    await pool.query(updateProductQuery, [
      name,
      price,
      description,
      created,
      stock_qty,
      id,
    ]);
    res.status(200).send("product updated successfully");
  } catch (err) {
    console.error(err.message);
  }
};

// const deleteProduct = (req, res) => {
//   const id = parseInt(req.params.id);
//   //check if product exists
//   pool.query(getProductByIdQuery, [id], (error, results) => {
//     if (!results.rows.length) {
//       return res.status(404).send("product does not exist");
//     }
//     //delete existing product
//     pool.query(deleteProductQuery, [id], (error, results) => {
//       if (error) throw error;
//       return res.status(200).json("product deleted successfully");
//     });
//   });
// };

// DELETE async version
const deleteProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    //check if product exists
    const checkProduct = await pool.query(getProductByIdQuery, [id]);
    if (!checkProduct.rows.length) {
      return res.status(404).send("product does not exist");
    }
    //delete existing product
    await pool.query(deleteProductQuery, [id]);
    res.status(200).json("product deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
