import "../../env";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

import database from "../../database";

const { PASS_SALT, TOKEN_SALT, TOKEN_EXPIRY } = process.env;

const loginController = (req: Request, res: Response) => {
  const { login, password } = req.body;
  const storedUser = database.user.byLogin(login);

  if (!storedUser) {
    res.send({
      message: "user not found"
    });
  }

  const hashedPassword = sign(password, PASS_SALT);

  if (hashedPassword === storedUser.password) {
    const token = sign(
      {
        id: storedUser.id
      },
      TOKEN_SALT,
      {
        expiresIn: TOKEN_EXPIRY
      }
    );

    res.send({
      login: storedUser.login,
      token
    });
  } else {
    res.send({
      message: "wrong password"
    });
  }
};

export default loginController;
