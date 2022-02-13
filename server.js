const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();
//cors middleware
app.use(cors());
//req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
