import db from '../db';
import Twilio from 'twilio';

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

      const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

      const message = await twilioClient.messages.create({
        body: `Ви успішно забронювали візит!\nДата: ${date}\nЧас: ${hour}\nПослуга: ${service}`,
        from: process.env.TWILIO_PHONE_NUMBER, 
        to: '+48787296201',
      });

      console.log("SMS успішно надіслано, SID:", message.sid);

    } catch (err) {
      console.error("Помилка бронювання або SMS:", err);
      throw err;
    } finally {
      client.release();
    }
  }
}
