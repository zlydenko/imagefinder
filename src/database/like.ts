import { users, getUserById } from "./user";
import store from "./store";

export interface Like {
  id: string;
  imageUrl: string;
  likedBy: string[];
}

export const likes = store.collection<Like>("likes");

export const getLikeById = (id: string): Like | null => {
  const allLikes = likes.list();
  const filtered = allLikes.filter(like => like.id === id);

  return filtered[0] || null;
};

export const getLikeByUrl = (url: string): Like | null => {
  const allLikes = likes.list();
  const filtered = allLikes.filter(like => like.imageUrl === url);

  return filtered[0] || null;
};

export const getUserLikes = (userId: string): Like[] => {
  const allLikes = likes.list();
  const filtered = allLikes.filter(like => like.likedBy.includes(userId));

  return filtered;
};

export const storeLike = (url: string, userId: string) => {
  const user = getUserById(userId);

  if (!user) throw new Error("no user with this id found");

  const storedLike = getLikeByUrl(url);
  let createdLike = null;

  if (storedLike) {
    likes.update({
      ...storedLike,
      likedBy: [...storedLike.likedBy, userId]
    });
  } else {
    createdLike = likes.create({
      imageUrl: url,
      likedBy: [userId]
    });
  }

  users.update({
    ...user,
    likes: [...user.likes, storedLike ? storedLike.id : createdLike]
  });

  return storedLike ? storedLike.id : createdLike;
};

export const dislike = (url: string, userId: string) => {
  const user = getUserById(userId);

  if (!user) throw new Error("no user with this id found");

  const storedLike = getLikeByUrl(url);

  if (!storedLike) throw new Error("no image found");

  if (storedLike.likedBy.length === 1) {
    likes.delete(storedLike.id);
  } else {
    const userFilteredOut = storedLike.likedBy.filter(
      likedUserId => likedUserId !== userId
    );
    const likeFilteredOut = user.likes.filter(
      likeId => likeId !== storedLike.id
    );
    likes.update({ ...storedLike, likedBy: [...userFilteredOut] });
    users.update({ ...user, likes: [...likeFilteredOut] });
  }
};
