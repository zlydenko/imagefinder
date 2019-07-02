import { users, createUser, getUserById } from "../user";
import {
  likes,
  storeLike,
  getLikeById,
  getLikeByUrl,
  getUserLikes
} from "../like";

describe("likes", () => {
  let usersToDelete: string[] = [];
  let likesToDelete: string[] = [];

  beforeAll(() => {
    const testUser = createUser("test1", "test");
    const anotherOneTestUser = createUser("test2", "test");
    usersToDelete.push(testUser);
    usersToDelete.push(anotherOneTestUser);
  });

  afterAll(() => {
    usersToDelete.forEach(userId => users.delete(userId));
    likesToDelete.forEach(likeId => likes.delete(likeId));
  });

  test("create like", () => {
    const [userOne, userTwo] = usersToDelete;

    const userOneLike = storeLike("test.com", userOne);
    const userTwoLike = storeLike("test.com", userTwo);
    likesToDelete = [userOneLike];

    const userOneLikes = getUserById(userOne).likes;
    const userTwoLikes = getUserById(userTwo).likes;

    expect(userOneLikes).toEqual(expect.arrayContaining([userOneLike]));
    expect(userTwoLikes).toEqual(expect.arrayContaining([userTwoLike]));

    expect(userOneLike).toBe(userTwoLike);
  });

  test("get like by id", () => {
    const like = getLikeById(likesToDelete[0]);

    expect(like).not.toBeNull();
    expect(like.likedBy).toHaveLength(2);
    expect(like.likedBy).toEqual(expect.arrayContaining(usersToDelete));
  });

  test("get like by url", () => {
    const like = getLikeByUrl("test.com");

    expect(like).not.toBeNull();
    expect(like.id).toBe(likesToDelete[0]);
    expect(like.likedBy).toHaveLength(2);
    expect(like.likedBy).toEqual(expect.arrayContaining(usersToDelete));
  });

  test("get all user likes", () => {
    const userOneLikes = getUserLikes(usersToDelete[0]);
    const userTwoLikes = getUserLikes(usersToDelete[1]);

    expect(userOneLikes).toEqual(expect.arrayContaining(userTwoLikes));
  });
});
