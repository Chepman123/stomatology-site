import mysql from "mysql2";
import dotenv from 'dotenv';

dotenv.config();
/*
export default mysql.createConnection({
  host: process.env.HOST!,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});*/

export default mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dantway',
});