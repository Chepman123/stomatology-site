import bcrypt from 'bcrypt';
import db from '../db';

export default class LoginService {
  Login(login: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const sql = `SELECT password FROM users WHERE login = ?`;
      db.query(sql, [login], (err, results: any[]) => {

        if (results.length === 0) return resolve(false);

        const hash = results[0].password as string;
        bcrypt.compare(password, hash, (cmpErr, isMatch) => {
          if (cmpErr) return reject(cmpErr);
          return resolve(Boolean(isMatch));
        });
      });
    });
  }
}
