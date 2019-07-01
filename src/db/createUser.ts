import db from ".";

const createUser = (login: string, hashedPassword: string): void => {
  db.users.create({
    login,
    password: hashedPassword,
    likes: [],
    history: []
  });
};

export default createUser;
