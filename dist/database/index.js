"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const history_1 = require("./history");
const like_1 = require("./like");
const user_1 = require("./user");
const database = {
    history: {
        save: history_1.saveToHistory,
        get: history_1.getHistory,
        byUser: history_1.getUserHistory,
        delete: history_1.deleteHistory
    },
    like: {
        byUrl: like_1.getLikeByUrl,
        byUser: like_1.getUserLikes,
        save: like_1.storeLike,
        dislike: like_1.dislike
    },
    user: {
        byId: user_1.getUserById,
        byLogin: user_1.getUserByLogin,
        create: user_1.createUser
    }
};
exports.default = database;
//# sourceMappingURL=index.js.map