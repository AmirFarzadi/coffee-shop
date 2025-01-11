const mysql = require("mysql2");
require('dotenv').config()
const debug = require("debug")('app:database');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "coffeeshop",
});
db.connect((err) => {
  if (err) {
    debug("Error connecting to database.", err.message);
    return;
  }
  debug("Connented to database...");
});

module.exports = db;
