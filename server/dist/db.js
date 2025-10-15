"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'postgres',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'dantway',
    port: Number(process.env.PORT) || 5432,
});
exports.default = pool;
