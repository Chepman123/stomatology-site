import db from '../db';
import nodemailer from 'nodemailer';

export default class BookServ {
  async Book(date: string, hour: string, service: string, login: string, userEmail: string) {
    const client = await db.connect();
    try {
      const userRes = await client.query(`SELECT id FROM users WHERE login = $1`, [login]);
      if (userRes.rowCount === 0) throw new Error("Користувач не знайдений");

      const userId = userRes.rows[0].id;


      await client.query(
        `INSERT INTO bookings(patient_id, date, time, service, notes) VALUES ($1, $2, $3, $4, '')`,
        [userId, date, hour, service]
      );

      console.log("Бронювання успішно додано");

      const transporter = nodemailer.createTransport({
        host: "Vladshlapak333@gmail.com", 
        port: 465,
        secure: true, 
        auth: {
          user: "dantwat@gmail.com",
          pass: "your_email_password",
        },
      });

      const mailOptions = {
        from: '"dantway" dantway@gmail.com>',
        to: userEmail,
        subject: "Підтвердження бронювання",
        text: `Ви успішно забронювали візит!\n\nДата: ${date}\nЧас: ${hour}\nПослуга: ${service}`,
        html: `<p>Ви успішно забронювали візит!</p>
               <p><b>Дата:</b> ${date}</p>
               <p><b>Час:</b> ${hour}</p>
               <p><b>Послуга:</b> ${service}</p>`
      };

      await transporter.sendMail(mailOptions);
      console.log("Email успішно надіслано");

    } catch (err) {
      console.error("Помилка бронювання або email:", err);
      throw err;
    } finally {
      client.release(); 
    }
  }
}
