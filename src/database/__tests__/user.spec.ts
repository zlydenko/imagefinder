import { users, getUserByLogin, getUserById, createUser } from "../user";

describe("users", () => {
  let userToDelete: string = "";
  const user = {
    login: "test",
    password: "test"
  };

  afterAll(() => {
    users.delete(userToDelete);
  });

  test("create user", () => {
    const createdUserId = createUser(user.login, user.password);
    userToDelete = createdUserId;

    expect(userToDelete).not.toBe("");
  });

  test("try create user with same name", () => {
    const createdUserId = createUser(user.login, user.password);

    expect(createdUserId).toBeNull();
  });

  test("get user by login", () => {
    const storedUser = getUserByLogin(user.login);

    expect(storedUser).not.toBeNull();
    expect(storedUser.login).toBe(user.login);
    expect(storedUser.id).toBe(userToDelete);
  });

  test("get user by id", () => {
    const storedUser = getUserById(userToDelete);

    expect(storedUser).not.toBeNull();
    expect(storedUser.login).toBe(user.login);
  });
});
