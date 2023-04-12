const mysql = require("mysql");
const config = require("./config");

const Connection = mysql.createConnection({
  host: config.SQLHOST,
  user: config.SQLUSER,
  password: config.SQLPASS,
  database: config.SQLDB,
});

Connection.connect((err) => {
  if (err) {
    console.log("Error Connecting to MySQL database = ", err);
    return;
  }
  console.log("MySQL successfully connected");
});

module.exports = {
  Connection: Connection,
};