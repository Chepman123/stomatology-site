import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.resolve(__dirname, "../src/.env") });
console.log(process.env.PASSWORD);
const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: Number(process.env.PORT),
  ssl:true
});

export default pool;
