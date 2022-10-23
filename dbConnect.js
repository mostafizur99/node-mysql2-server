const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.MYSQL_DB_USER,
  database: process.env.MYSQL_DB_DATABASE,
  password: process.env.MYSQL_DB_PASSWORD,
})

module.exports = pool.promise();