import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'postgres',
  password: process.env.PASSWORD || '',
  database: process.env.DATABASE || 'dantway',
  port: Number(process.env.PORT) || 5432,
});

export default pool;
