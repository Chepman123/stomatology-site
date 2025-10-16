"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookController {
    constructor(serv) {
        this.serv = serv;
    }
    Book(req, res) {
        this.serv.Book(req.body.login, req.body.data, req.body.hour, req.body.service, req.body.login);
        res.status(200).json({ message: 'Booking created' });
    }
}
exports.default = BookController;
