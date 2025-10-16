"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class BookServ {
    async Book(date, hour, service, login) {
        const client = await db_1.default.connect();
        try {
            const userRes = await client.query(`SELECT id FROM users WHERE login = $1`, [login]);
            if (userRes.rowCount === 0)
                throw new Error("Користувач не знайдений");
            const userId = userRes.rows[0].id;
            await client.query(`INSERT INTO bookings(patient_id, date, time, service, notes) VALUES ($1, $2, $3, $4, '')`, [userId, date, hour, service]);
            const testAccount = await nodemailer_1.default.createTestAccount();
            const transporter = nodemailer_1.default.createTransport({
                host: testAccount.smtp.host,
                port: testAccount.smtp.port,
                secure: testAccount.smtp.secure,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
            const mailOptions = {
                from: '"Dantway" <no-reply@example.com>',
                to: 'Vladshlapak333@gmail.com', // 
                subject: 'Підтвердження бронювання',
                text: `Ви успішно забронювали візит!\nДата: ${date}\nЧас: ${hour}\nПослуга: ${service}`,
                html: `<p>Ви успішно забронювали візит!</p>
               <p><b>Дата:</b> ${date}</p>
               <p><b>Час:</b> ${hour}</p>
               <p><b>Послуга:</b> ${service}</p>`
            };
            const info = await transporter.sendMail(mailOptions);
            console.log("Email надіслано, preview URL:", nodemailer_1.default.getTestMessageUrl(info));
        }
        catch (err) {
            console.error("Помилка бронювання або email:", err);
            throw err;
        }
        finally {
            client.release();
        }
    }
}
exports.default = BookServ;
