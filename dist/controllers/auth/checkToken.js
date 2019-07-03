"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../env");
const jwt = require("jsonwebtoken");
const database_1 = require("../../database");
const { TOKEN_SALT } = process.env;
const checkToken = (req, res) => {
    const reqTime = +new Date();
    const { token } = req.body;
    if (!token)
        res.send({
            message: 'token is not provided',
            auth: false
        });
    const decodedToken = jwt.verify(token, TOKEN_SALT);
    const { id: userId, exp } = decodedToken;
    const tokenIsExpired = reqTime >= exp * 1000;
    if (tokenIsExpired) {
        res.send({
            message: 'session is expired',
            auth: false
        });
    }
    const user = database_1.default.user.byId(userId);
    if (user) {
        res.send({
            message: 'OK',
            auth: true,
            userLogin: user.login
        });
    }
    else {
        res.send({
            message: 'session token invalid',
            auth: false
        });
    }
};
exports.default = checkToken;
//# sourceMappingURL=checkToken.js.map