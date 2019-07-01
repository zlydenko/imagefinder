import { DataStore } from "notarealdb";

import { History } from "./history";
import { Like } from "./likes";
import { User } from "./users";

import createUser from "./createUser";
import getUserByLogin from "./getUserByLogin";

const store = new DataStore("./data");

const history = store.collection<History>("history");
const likes = store.collection<Like>("likes");
const users = store.collection<User>("users");

const db = {
  history,
  likes,
  users,
  getUserByLogin,
  createUser
};

export default db;
