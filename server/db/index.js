import pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg;
dotenv.config();

let pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export default pool;
