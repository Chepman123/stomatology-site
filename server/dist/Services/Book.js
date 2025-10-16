"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const twilio_1 = __importDefault(require("twilio"));
class BookServ {
    async Book(date, hour, service, login) {
        const client = await db_1.default.connect();
        try {
            const userRes = await client.query(`SELECT id FROM users WHERE login = $1`, [login]);
            if (userRes.rowCount === 0)
                throw new Error("Користувач не знайдений");
            const userId = userRes.rows[0].id;
            await client.query(`INSERT INTO bookings(patient_id, date, time, service, notes) VALUES ($1, $2, $3, $4, '')`, [userId, date, hour, service]);
            const twilioClient = (0, twilio_1.default)(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
            const message = await twilioClient.messages.create({
                body: `Ви успішно забронювали візит!\nДата: ${date}\nЧас: ${hour}\nПослуга: ${service}`,
                from: process.env.TWILIO_PHONE_NUMBER,
                to: '+48787296201',
            });
            console.log("SMS успішно надіслано, SID:", message.sid);
        }
        catch (err) {
            console.error("Помилка бронювання або SMS:", err);
            throw err;
        }
        finally {
            client.release();
        }
    }
}
exports.default = BookServ;
