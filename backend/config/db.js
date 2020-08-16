const mysql = require("mysql");
const util = require("util");

require("dotenv").config();
// Create connection.


const connect = mysql.createConnection({
  host: process.env.HOST ,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
  
});
// Connect to the database.
connect.connect((err) => {
  if (err) {
    console.log("Connection to database failed.", err);
  } else {
    console.log("Connected to database successfully.");
  }
});
connect.query = util.promisify(connect.query).bind(connect);
module.exports = connect;
