import { Request, Response } from 'express';

import database from '../../database';

const getHistory = (req: Request, res: Response) => {
  try {
    const { username } = req.query;

    if (!username) throw new Error('user not provided');

    const user = database.user.byLogin(username);
    if (!user) throw new Error('user not found');

    const { id: userId } = user;
    const history = database.history.byUser(userId);
    const result = history.map(({ id, text }) => ({ id, text }));

    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
};

export default getHistory;
