import store from './store';
import { users, getUserById } from './user';

export interface History {
  id: string;
  text: string;
  searchedBy: string[];
}

export const history = store.collection<History>('history');

export const getHistoryById = (id: string): History | null => {
  const allHistory = history.list();
  const filtered = allHistory.filter(history => history.id === id);
  return filtered[0] || null;
};

export const getHistory = (text: string): History | null => {
  const allHistory = history.list();
  const filtered = allHistory.filter(history => history.text === text);
  return filtered[0] || null;
};

export const saveToHistory = (s: string, userId: string): string => {
  const user = getUserById(userId);

  if (!user) throw new Error('no user with this id found');

  const formatText = s
    .split(' ')
    .map(w => w.toLowerCase())
    .join(' ');
  const storedHistory = getHistory(formatText);
  let createdHistory = null;

  if (storedHistory) {
    history.update({
      ...storedHistory,
      searchedBy: [...storedHistory.searchedBy, userId]
    });
  } else {
    createdHistory = history.create({
      text: formatText,
      searchedBy: [userId]
    });
  }

  users.update({
    ...user,
    history: [...user.history, storedHistory ? storedHistory.id : createdHistory]
  });

  return storedHistory ? storedHistory.id : createdHistory;
};

export const getUserHistory = (userId: string): History[] => {
  const allHistory = history.list();
  const filtered = allHistory.filter(history => history.searchedBy.includes(userId));

  return filtered;
};

export const deleteHistory = (historyId: string, userId: string) => {
  const user = getUserById(userId);

  if (!user) throw new Error('no user with this id found');

  const storedHistory = getHistoryById(historyId);

  if (!storedHistory) throw new Error('no history found');

  if (storedHistory.searchedBy.length === 1) {
    history.delete(historyId);
  } else {
    const userFilteredOut = storedHistory.searchedBy.filter(savedUserId => savedUserId !== userId);
    history.update({ ...storedHistory, searchedBy: [...userFilteredOut] });
  }

  const historyFilteredOut = user.history.filter(historyId => historyId !== storedHistory.id);
  users.update({ ...user, history: [...historyFilteredOut] });
};
