import mysql from 'mysql2';


const connection = mysql.createPool(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Vinho'
  }).promise();

export default connection;