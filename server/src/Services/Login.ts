import bcrypt from 'bcrypt';
import db from '../db';

export default class LoginService {
  async Login(login: string, password: string): Promise<boolean> {
    const client = await db.connect();
    try {
      const sql = `SELECT password FROM users WHERE login = $1`;
      const res = await client.query(sql, [login]);
      if (res.rowCount === 0) return false;

      const hash = res.rows[0].password as string;
      return await bcrypt.compare(password, hash);
    } catch (err) {
      console.error(err);
      return false;
    } finally {
      client.release();
    }
  }
}
