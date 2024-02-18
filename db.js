/** Database config for database. */


const { Client } = require("pg");
const {DB_URI} = require("./config");

let db = new Client({
  user: "postgres",
  host: "localhost",
  database: "books",
  password: "postgres",
  port: 5432,
});

db.connect();


module.exports = db;
