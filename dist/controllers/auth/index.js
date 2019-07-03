"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./login");
const register_1 = require("./register");
const checkToken_1 = require("./checkToken");
const auth = {
    login: login_1.default,
    register: register_1.default,
    checkToken: checkToken_1.default
};
exports.default = auth;
//# sourceMappingURL=index.js.map