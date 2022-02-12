const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("spierdalaj");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
