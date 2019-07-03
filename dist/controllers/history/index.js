"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getHistory_1 = require("./getHistory");
const deleteHistory_1 = require("./deleteHistory");
const historyController = {
    get: getHistory_1.default,
    delete: deleteHistory_1.default
};
exports.default = historyController;
//# sourceMappingURL=index.js.map