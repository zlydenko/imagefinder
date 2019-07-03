import { Request, Response } from "express";

import database from "../../database";

const likeImage = (req: Request, res: Response) => {
  try {
    const { username, imageUrl, state } = req.body;
    const userId = database.user.byLogin(username).id;

    if (state) {
      database.like.save(imageUrl, userId);
    } else {
      database.like.dislike(imageUrl, userId);
    }
  } catch (error) {
    res.send(error);
  }
};

export default likeImage;
