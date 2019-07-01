import { User } from "./users";
import db from ".";

const getUserByLogin = (login: string): User | null => {
  const allUsers = db.users.list();
  const filtered = allUsers.filter(user => user.login === login);

  return filtered[0] || null;
};

export default getUserByLogin;
