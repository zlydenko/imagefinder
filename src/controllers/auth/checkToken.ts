import "../../env";
import { verify } from "jsonwebtoken";
import {Request,Response} from 'express'

import database from "../../database";

const { TOKEN_SALT } = process.env;

interface DecodedToken {
    id: 
}

const checkToken = (req: Request,res:Response) => {
    const {token} = req;
  const decodedToken = verify(token, TOKEN_SALT);
  const user = database.user.byLogin(decodedToken.id);
};

export default checkToken;
