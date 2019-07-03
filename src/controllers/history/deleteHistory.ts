import { Request, Response } from 'express';
import database from '../../database';

const deleteHistory = (req: Request, res: Response) => {
  try {
    const { username, id } = req.body;
    if (!username || !id) throw new Error('username or history not provided');

    const user = database.user.byLogin(username);

    if (!user) throw new Error('user not found');

    const userId = user.id;

    database.history.delete(id, userId);

    res.send({ message: 'OK' });
  } catch (error) {
    res.send({ message: error.message });
  }
};

export default deleteHistory;
