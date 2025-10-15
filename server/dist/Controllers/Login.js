"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor(serv) {
        this.serv = serv;
    }
    Login(req, res) {
        res.json(this.serv.Login(req.body.login, req.body.password));
    }
}
exports.default = LoginController;
