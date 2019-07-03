"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const store_1 = require("./store");
exports.likes = store_1.default.collection('likes');
exports.getLikeById = (id) => {
    const allLikes = exports.likes.list();
    const filtered = allLikes.filter(like => like.id === id);
    return filtered[0] || null;
};
exports.getLikeByUrl = (url) => {
    const allLikes = exports.likes.list();
    const filtered = allLikes.filter(like => like.imageUrl === url);
    return filtered[0] || null;
};
exports.getUserLikes = (userId) => {
    const allLikes = exports.likes.list();
    const filtered = allLikes.filter(like => like.likedBy.includes(userId));
    return filtered;
};
exports.storeLike = (url, userId) => {
    const user = user_1.getUserById(userId);
    if (!user)
        throw new Error('no user with this id found');
    const storedLike = exports.getLikeByUrl(url);
    let createdLike = null;
    if (storedLike) {
        exports.likes.update({
            ...storedLike,
            likedBy: [...storedLike.likedBy, userId]
        });
    }
    else {
        createdLike = exports.likes.create({
            imageUrl: url,
            likedBy: [userId]
        });
    }
    user_1.users.update({
        ...user,
        likes: [...user.likes, storedLike ? storedLike.id : createdLike]
    });
    return storedLike ? storedLike.id : createdLike;
};
exports.dislike = (url, userId) => {
    const user = user_1.getUserById(userId);
    if (!user)
        throw new Error('no user with this id found');
    const storedLike = exports.getLikeByUrl(url);
    if (!storedLike)
        throw new Error('no image found');
    if (storedLike.likedBy.length === 1) {
        exports.likes.delete(storedLike.id);
    }
    else {
        const userFilteredOut = storedLike.likedBy.filter(likedUserId => likedUserId !== userId);
        exports.likes.update({ ...storedLike, likedBy: [...userFilteredOut] });
    }
    const likeFilteredOut = user.likes.filter(likeId => likeId !== storedLike.id);
    user_1.users.update({ ...user, likes: [...likeFilteredOut] });
};
//# sourceMappingURL=like.js.map