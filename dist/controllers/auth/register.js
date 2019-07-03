"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../env");
const jsonwebtoken_1 = require("jsonwebtoken");
const database_1 = require("../../database");
const { PASS_SALT } = process.env;
const registerController = (req, res) => {
    const { login, password } = req.body;
    const storedUser = database_1.default.user.byLogin(login);
    if (storedUser) {
        return res.send({
            message: 'username is already taken'
        });
    }
    const hashedPassword = jsonwebtoken_1.sign(password, PASS_SALT);
    database_1.default.user.create(login, hashedPassword);
    return res.send({
        message: 'OK'
    });
};
exports.default = registerController;
//# sourceMappingURL=register.js.map