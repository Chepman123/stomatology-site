import bcrypt from 'bcrypt';
import db from '../db'
export default class RegService{
   Reg(login:string,password:string,phone:string):Promise<boolean>{
      return new Promise<boolean>(async(resolve,reject)=>{
       const hashedPassword = await bcrypt.hash(password,10);
       const sql:string = `INSERT INTO users(login, password, phone) VALUES (?,?,?)`;
       db.query(sql,[login,hashedPassword,phone]);

       return true;
      });
   }
}