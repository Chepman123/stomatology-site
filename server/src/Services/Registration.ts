import bcrypt from 'bcrypt';
import db from '../db';

export default class RegService {
  async Reg(login: string, password: string, phone: string): Promise<boolean> {
    const client = await db.connect();
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = `INSERT INTO users(login, password, phone) VALUES ($1, $2, $3)`;
      await client.query(sql, [login, hashedPassword, phone]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      client.release(); 
    }
  }
}
