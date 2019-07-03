"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user");
const history_1 = require("../history");
describe("history", () => {
    let usersToDelete = [];
    let historiesToDelete = [];
    beforeAll(() => {
        const testUser = user_1.createUser("test1", "test");
        const anotherOneTestUser = user_1.createUser("test2", "test");
        usersToDelete.push(testUser);
        usersToDelete.push(anotherOneTestUser);
    });
    afterAll(() => {
        usersToDelete.forEach(userId => user_1.users.delete(userId));
        historiesToDelete.forEach(historyId => history_1.history.delete(historyId));
    });
    test("save to history", () => {
        const firstId = history_1.saveToHistory("cat", usersToDelete[0]);
        const secondId = history_1.saveToHistory("dog", usersToDelete[0]);
        const userOne = user_1.getUserById(usersToDelete[0]);
        const expected = [firstId, secondId];
        expect(userOne.history).toEqual(expect.arrayContaining(expected));
        const thirdId = history_1.saveToHistory("cat", usersToDelete[1]);
        const userTwo = user_1.getUserById(usersToDelete[1]);
        expect(userTwo.history).toEqual(expect.arrayContaining([thirdId]));
        historiesToDelete = [...historiesToDelete, firstId, secondId, thirdId];
    });
    test("get stored history", () => {
        const storedHistory = history_1.getHistory("dog");
        const anotherStoredHistory = history_1.getHistory("cat");
        const notStoredHistory = history_1.getHistory("pop");
        expect(historiesToDelete.includes(storedHistory.id)).toBe(true);
        expect(historiesToDelete.includes(anotherStoredHistory.id)).toBe(true);
        expect(notStoredHistory).toBeNull();
    });
    test("get user's history", () => {
        const firstUserHistories = history_1.getUserHistory(usersToDelete[0]);
        expect(firstUserHistories).toHaveLength(2);
    });
});
//# sourceMappingURL=history.spec.js.map