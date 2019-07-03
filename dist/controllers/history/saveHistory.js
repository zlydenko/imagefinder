"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const saveHistory = (username, input) => {
    const user = database_1.default.user.byLogin(username);
    if (!user)
        throw new Error('user not found');
    const { id: userId } = user;
    const historyId = database_1.default.history.save(input, userId);
    user.update();
    return;
};
exports.default = saveHistory;
//# sourceMappingURL=saveHistory.js.map