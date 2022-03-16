const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");
const orderRouter = require("./routes/orders");
const productRouter = require("./routes/products");

const PORT = process.env.PORT || 5000;
const app = express();

//middleware for handling CORS requests from index.html
app.use(cors());

//middware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
