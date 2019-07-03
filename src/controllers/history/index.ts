import getHistory from './getHistory';
import deleteHistory from './deleteHistory';

const historyController = {
  get: getHistory,
  delete: deleteHistory
};

export default historyController;
