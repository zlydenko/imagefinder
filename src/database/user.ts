import store from "./store";

export interface User {
  id: string;
  login: string;
  password: string;
  likes: string[];
  history: string[];
}

export const users = store.collection<User>("users");

export const getUserByLogin = (login: string): User | null => {
  const allUsers = users.list();
  const filtered = allUsers.filter(user => user.login === login);

  return filtered[0] || null;
};

export const createUser = (
  login: string,
  hashedPassword: string
): string | null => {
  const storedUser = getUserByLogin(login);

  return storedUser
    ? null
    : users.create({
        login,
        password: hashedPassword,
        likes: [],
        history: []
      });
};
