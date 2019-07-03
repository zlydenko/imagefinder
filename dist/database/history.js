"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const user_1 = require("./user");
exports.history = store_1.default.collection('history');
exports.getHistoryById = (id) => {
    const allHistory = exports.history.list();
    const filtered = allHistory.filter(history => history.id === id);
    return filtered[0] || null;
};
exports.getHistory = (text) => {
    const allHistory = exports.history.list();
    const filtered = allHistory.filter(history => history.text === text);
    return filtered[0] || null;
};
exports.saveToHistory = (s, userId) => {
    const user = user_1.getUserById(userId);
    if (!user)
        throw new Error('no user with this id found');
    const formatText = s
        .split(' ')
        .map(w => w.toLowerCase())
        .join(' ');
    const storedHistory = exports.getHistory(formatText);
    let createdHistory = null;
    if (storedHistory) {
        exports.history.update({
            ...storedHistory,
            searchedBy: [...storedHistory.searchedBy, userId]
        });
    }
    else {
        createdHistory = exports.history.create({
            text: formatText,
            searchedBy: [userId]
        });
    }
    user_1.users.update({
        ...user,
        history: [...user.history, storedHistory ? storedHistory.id : createdHistory]
    });
    return storedHistory ? storedHistory.id : createdHistory;
};
exports.getUserHistory = (userId) => {
    const allHistory = exports.history.list();
    const filtered = allHistory.filter(history => history.searchedBy.includes(userId));
    return filtered;
};
exports.deleteHistory = (historyId, userId) => {
    const user = user_1.getUserById(userId);
    if (!user)
        throw new Error('no user with this id found');
    const storedHistory = exports.getHistoryById(historyId);
    if (!storedHistory)
        throw new Error('no history found');
    if (storedHistory.searchedBy.length === 1) {
        exports.history.delete(historyId);
    }
    else {
        const userFilteredOut = storedHistory.searchedBy.filter(savedUserId => savedUserId !== userId);
        exports.history.update({ ...storedHistory, searchedBy: [...userFilteredOut] });
    }
    const historyFilteredOut = user.history.filter(historyId => historyId !== storedHistory.id);
    user_1.users.update({ ...user, history: [...historyFilteredOut] });
};
//# sourceMappingURL=history.js.map