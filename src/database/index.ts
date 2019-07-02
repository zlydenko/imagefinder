import { getUserHistory, saveToHistory, getHistory } from './history';
import { getUserLikes, getLikeByUrl, storeLike } from './like';
import { getUserByLogin, getUserById, createUser } from './user';

const database = {
  history: {
    save: saveToHistory,
    get: getHistory,
    byUser: getUserHistory
  },
  like: {
    byUrl: getLikeByUrl,
    byUser: getUserLikes,
    save: storeLike
  },
  user: {
    byId: getUserById,
    byLogin: getUserByLogin,
    create: createUser
  }
};

export default database;
