import store from "./store";
import { users, getUserById } from "./user";

export interface History {
  id: string;
  text: string;
  searchedBy: string[];
}

export const history = store.collection<History>("history");

export const getHistory = (text: string): History | null => {
  const allHistory = history.list();
  const filtered = allHistory.filter(history => history.text === text);
  return filtered[0] || null;
};

export const saveToHistory = (s: string, userId: string): string => {
  const user = getUserById(userId);

  if (!user) throw new Error("no user with this id found");

  const formatText = s
    .split(" ")
    .map(w => w.toLowerCase())
    .join(" ");
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
    history: [
      ...user.history,
      storedHistory ? storedHistory.id : createdHistory
    ]
  });

  return storedHistory ? storedHistory.id : createdHistory;
};
