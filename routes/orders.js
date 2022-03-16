const { Router } = require("express");

const {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders");

const orderRouter = Router();

orderRouter.get("/", getAllOrders);
orderRouter.post("/", createOrder);
orderRouter.get("/:id", getOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

module.exports = orderRouter;
