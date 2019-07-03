"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user");
describe("users", () => {
    let userToDelete = "";
    const user = {
        login: "test",
        password: "test"
    };
    afterAll(() => {
        user_1.users.delete(userToDelete);
    });
    test("create user", () => {
        const createdUserId = user_1.createUser(user.login, user.password);
        userToDelete = createdUserId;
        expect(userToDelete).not.toBe("");
    });
    test("try create user with same name", () => {
        const createdUserId = user_1.createUser(user.login, user.password);
        expect(createdUserId).toBeNull();
    });
    test("get user by login", () => {
        const storedUser = user_1.getUserByLogin(user.login);
        expect(storedUser).not.toBeNull();
        expect(storedUser.login).toBe(user.login);
        expect(storedUser.id).toBe(userToDelete);
    });
    test("get user by id", () => {
        const storedUser = user_1.getUserById(userToDelete);
        expect(storedUser).not.toBeNull();
        expect(storedUser.login).toBe(user.login);
    });
});
//# sourceMappingURL=user.spec.js.map