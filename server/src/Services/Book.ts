import db from '../db';

interface optionData{
    id:number,
    date:string,
    time:string,
    login:string
}

export default class BookServ {
  async Book(date: string, hour: string, service: string, login: string) {
    const client = await db.connect();
    
      const userRes = await client.query(`SELECT id FROM users WHERE login = $1`, [login]);
      if (userRes.rowCount === 0) throw new Error("Користувач не знайдений");

      const userId = userRes.rows[0].id;

      await client.query(
        `INSERT INTO bookings(patient_id, date, time, service, notes) VALUES ($1, $2, $3, $4, '')`,
        [userId, date, hour, service]
      );

      client.release();
  }
  async GetUsers():Promise<optionData[]>{
    const client = await db.connect();

    const sql:string=`SELECT b.id,b.date,b.time, u.login, u.phone FROM bookings b
JOIN users u ON u.id=b.patient_id  `;
     const result:optionData[] = (await client.query(sql)).rows;
     client.release();
     return result;
  }
  async DeleteUsers(id:number){
    const client = await db.connect();
    console.log(id)
    const sql = `DELETE FROM bookings WHERE id = $1`;

    client.query(sql,[id]);

    client.release();
  }
}
