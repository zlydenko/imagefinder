"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const deleteHistory = (req, res) => {
    try {
        const { username, id } = req.body;
        if (!username || !id)
            throw new Error('username or history not provided');
        const user = database_1.default.user.byLogin(username);
        if (!user)
            throw new Error('user not found');
        const userId = user.id;
        database_1.default.history.delete(id, userId);
        res.send({ message: 'OK' });
    }
    catch (error) {
        res.send({ message: error.message });
    }
};
exports.default = deleteHistory;
//# sourceMappingURL=deleteHistory.js.map