const sql = require("mssql");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 1433,
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
};

async function connectDB() {
  try {
    let pool = await sql.connect(dbConfig);
    console.log("Connected to SQL Server");
    return pool;
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

module.exports = { connectDB, sql };
