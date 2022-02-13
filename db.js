const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "",
  password: "",
  port: 5432,
  database: "ecommerce",
});

module.exports = pool;
