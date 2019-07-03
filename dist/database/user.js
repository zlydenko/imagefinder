"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
exports.users = store_1.default.collection("users");
exports.getUserById = (id) => {
    const allUsers = exports.users.list();
    const filtered = allUsers.filter(user => user.id === id);
    return filtered[0] || null;
};
exports.getUserByLogin = (login) => {
    const allUsers = exports.users.list();
    const filtered = allUsers.filter(user => user.login === login);
    return filtered[0] || null;
};
exports.createUser = (login, hashedPassword) => {
    const storedUser = exports.getUserByLogin(login);
    return storedUser
        ? null
        : exports.users.create({
            login,
            password: hashedPassword,
            likes: [],
            history: []
        });
};
//# sourceMappingURL=user.js.map