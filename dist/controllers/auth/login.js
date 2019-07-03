"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../env");
const jsonwebtoken_1 = require("jsonwebtoken");
const database_1 = require("../../database");
const { PASS_SALT, TOKEN_SALT, TOKEN_EXPIRY } = process.env;
const loginController = (req, res) => {
    const { login, password } = req.body;
    const storedUser = database_1.default.user.byLogin(login);
    if (!storedUser) {
        res.send({
            message: 'user not found'
        });
    }
    const hashedPassword = jsonwebtoken_1.sign(password, PASS_SALT);
    if (hashedPassword === storedUser.password) {
        const token = jsonwebtoken_1.sign({
            id: storedUser.id
        }, TOKEN_SALT, {
            expiresIn: TOKEN_EXPIRY
        });
        res.send({
            login: storedUser.login,
            token
        });
    }
    else {
        res.send({
            message: 'wrong password'
        });
    }
};
exports.default = loginController;
//# sourceMappingURL=login.js.map