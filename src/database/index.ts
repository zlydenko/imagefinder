import { getUserHistory, saveToHistory, getHistory, deleteHistory } from './history';
import { getUserLikes, getLikeByUrl, storeLike, dislike } from './like';
import { getUserByLogin, getUserById, createUser } from './user';

const database = {
  history: {
    save: saveToHistory,
    get: getHistory,
    byUser: getUserHistory,
    delete: deleteHistory
  },
  like: {
    byUrl: getLikeByUrl,
    byUser: getUserLikes,
    save: storeLike,
    dislike
  },
  user: {
    byId: getUserById,
    byLogin: getUserByLogin,
    create: createUser
  }
};

export default database;
