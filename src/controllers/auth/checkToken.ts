import '../../env';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import database from '../../database';

const { TOKEN_SALT } = process.env;

interface DecodedToken {
  id: string;
  exp: number;
}

const checkToken = (req: Request, res: Response) => {
  const reqTime = +new Date();
  const { token } = req.body;

  if (!token)
    res.send({
      message: 'token is not provided',
      auth: false
    });

  const decodedToken = jwt.verify(token, TOKEN_SALT);
  const { id: userId, exp } = decodedToken as DecodedToken;
  const tokenIsExpired = reqTime >= exp * 1000;

  if (tokenIsExpired) {
    res.send({
      message: 'session is expired',
      auth: false
    });
  }

  const user = database.user.byId(userId);

  if (user) {
    res.send({
      message: 'OK',
      auth: true,
      userLogin: user.login
    });
  } else {
    res.send({
      message: 'session token invalid',
      auth: false
    });
  }
};

export default checkToken;
