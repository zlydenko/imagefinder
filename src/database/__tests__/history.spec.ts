import { users, createUser, getUserById } from "../user";
import { history, saveToHistory } from "../history";

describe("history", () => {
  let usersToDelete: string[] = [];
  let historiesToDelete: string[] = [];

  beforeAll(() => {
    const testUser = createUser("test1", "test");
    const anotherOneTestUser = createUser("test2", "test");
    usersToDelete.push(testUser);
    usersToDelete.push(anotherOneTestUser);
  });

  afterAll(() => {
    usersToDelete.forEach(userId => users.delete(userId));
    historiesToDelete.forEach(historyId => history.delete(historyId));
  });

  test("save to history", () => {
    const firstId = saveToHistory("cat", usersToDelete[0]);
    const secondId = saveToHistory("dog", usersToDelete[0]);
    const userOne = getUserById(usersToDelete[0]);
    const expected = [firstId, secondId];

    expect(userOne.history).toEqual(expect.arrayContaining(expected));

    const thirdId = saveToHistory("cat", usersToDelete[1]);
    const userTwo = getUserById(usersToDelete[1]);

    expect(userTwo.history).toEqual(expect.arrayContaining([thirdId]));

    historiesToDelete = [...historiesToDelete, firstId, secondId, thirdId];
  });
});
