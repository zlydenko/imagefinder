"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user");
const like_1 = require("../like");
describe("likes", () => {
    let usersToDelete = [];
    let likesToDelete = [];
    beforeAll(() => {
        const testUser = user_1.createUser("test1", "test");
        const anotherOneTestUser = user_1.createUser("test2", "test");
        usersToDelete.push(testUser);
        usersToDelete.push(anotherOneTestUser);
    });
    afterAll(() => {
        usersToDelete.forEach(userId => user_1.users.delete(userId));
        likesToDelete.forEach(likeId => like_1.likes.delete(likeId));
    });
    test("create like", () => {
        const [userOne, userTwo] = usersToDelete;
        const userOneLike = like_1.storeLike("test.com", userOne);
        const userTwoLike = like_1.storeLike("test.com", userTwo);
        likesToDelete = [userOneLike];
        const userOneLikes = user_1.getUserById(userOne).likes;
        const userTwoLikes = user_1.getUserById(userTwo).likes;
        expect(userOneLikes).toEqual(expect.arrayContaining([userOneLike]));
        expect(userTwoLikes).toEqual(expect.arrayContaining([userTwoLike]));
        expect(userOneLike).toBe(userTwoLike);
    });
    test("get like by id", () => {
        const like = like_1.getLikeById(likesToDelete[0]);
        expect(like).not.toBeNull();
        expect(like.likedBy).toHaveLength(2);
        expect(like.likedBy).toEqual(expect.arrayContaining(usersToDelete));
    });
    test("get like by url", () => {
        const like = like_1.getLikeByUrl("test.com");
        expect(like).not.toBeNull();
        expect(like.id).toBe(likesToDelete[0]);
        expect(like.likedBy).toHaveLength(2);
        expect(like.likedBy).toEqual(expect.arrayContaining(usersToDelete));
    });
    test("get all user likes", () => {
        const userOneLikes = like_1.getUserLikes(usersToDelete[0]);
        const userTwoLikes = like_1.getUserLikes(usersToDelete[1]);
        expect(userOneLikes).toEqual(expect.arrayContaining(userTwoLikes));
    });
});
//# sourceMappingURL=like.spec.js.map