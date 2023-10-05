const mysql = require('mysql2');
require('dotenv').config() //config will read your .env file, parse the contents, assign it to process.env,

// create the connection to database
const connection = mysql.createConnection({
  host: 'appworks-mysql-1.cwsergwzdswh.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: process.env.MYSQL_PWD,
  database: 'assignment',
  port: '3306'
});

exports.connection = connection;