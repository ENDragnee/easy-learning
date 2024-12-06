// lib/db.js
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: "localhost",
  user: "END",
  port: "3306",
  password: "1234",
  database: "lumo",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection
const testConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log('Database connected successfully');
    connection.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

// Only run the test in development
if (process.env.NODE_ENV === 'development') {
  testConnection();
}

export default db;