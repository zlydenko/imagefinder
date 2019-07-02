import { getUserHistory, saveToHistory, getHistory } from "./history";
import { getUserLikes, storeLike } from "./like";
import { getUserByLogin, createUser } from "./user";

const database = {
  history: {
    save: saveToHistory,
    get: getHistory,
    byUser: getUserHistory
  },
  like: {
    byUser: getUserLikes,
    save: storeLike
  },
  user: {
    byLogin: getUserByLogin,
    create: createUser
  }
};

export default database;
