"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const getHistory = (req, res) => {
    try {
        const { username } = req.query;
        if (!username)
            throw new Error('user not provided');
        const user = database_1.default.user.byLogin(username);
        if (!user)
            throw new Error('user not found');
        const { id: userId } = user;
        const history = database_1.default.history.byUser(userId);
        const result = history.map(({ id, text }) => ({ id, text }));
        res.send(result);
    }
    catch (error) {
        res.send({ message: error.message });
    }
};
exports.default = getHistory;
//# sourceMappingURL=getHistory.js.map