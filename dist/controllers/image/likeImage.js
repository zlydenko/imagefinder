"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../database");
const likeImage = (req, res) => {
    try {
        const { username, imageUrl, state } = req.body;
        const userId = database_1.default.user.byLogin(username).id;
        if (state) {
            database_1.default.like.save(imageUrl, userId);
        }
        else {
            database_1.default.like.dislike(imageUrl, userId);
        }
    }
    catch (error) {
        res.send(error);
    }
};
exports.default = likeImage;
//# sourceMappingURL=likeImage.js.map