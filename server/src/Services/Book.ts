import db from '../db';
import nodemailer from 'nodemailer';

export default class BookServ {
  async Book(date: string, hour: string, service: string, login: string) {
    const client = await db.connect();
    try {
      const userRes = await client.query(`SELECT id FROM users WHERE login = $1`, [login]);
      if (userRes.rowCount === 0) throw new Error("Користувач не знайдений");

      const userId = userRes.rows[0].id;


      await client.query(
        `INSERT INTO bookings(patient_id, date, time, service, notes) VALUES ($1, $2, $3, $4, '')`,
        [userId, date, hour, service]
      );

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vladshlapak444@gmail.com",      
          pass: "07vSh03333",             
        },
      });

      const mailOptions = {
        from: '"Dantway" <твій_логін@gmail.com>',
        to: 'Vladshlapak333@gmail.com',
        subject: "Підтвердження бронювання",
        text: `Ви успішно забронювали візит!\n\nДата: ${date}\nЧас: ${hour}\nПослуга: ${service}`,
        html: `<p>Ви успішно забронювали візит!</p>
               <p><b>Дата:</b> ${date}</p>
               <p><b>Час:</b> ${hour}</p>
               <p><b>Послуга:</b> ${service}</p>`
      };

      await transporter.sendMail(mailOptions);
      console.log("Email успішно надіслано на Vladshlapak333@gmail.com");

    } catch (err) {
      console.error("Помилка бронювання або email:", err);
      throw err;
    } finally {
      client.release();
    }
  }
}