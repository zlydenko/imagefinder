import '../../env';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

import database from '../../database';

const { PASS_SALT } = process.env;

const registerController = (req: Request, res: Response) => {
  const { login, password } = req.body;
  const storedUser = database.user.byLogin(login);

  if (storedUser) {
    return res.send({
      message: 'username is already taken'
    });
  }

  const hashedPassword = sign(password, PASS_SALT);
  database.user.create(login, hashedPassword);

  return res.send({
    message: 'OK'
  });
};

export default registerController;
