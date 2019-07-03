import '../../env';
import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';

import database from '../../database';

const { GIPHY_API_KEY } = process.env;
const rootUrl = 'https://api.giphy.com/v1/gifs/search';

const searchImage = async (req: Request, res: Response) => {
  try {
    const { username, input, page } = req.body;
    const user = database.user.byLogin(username);
    const { data: giphyResponse }: AxiosResponse<Giphy.Response> = await axios.get(rootUrl, {
      params: {
        api_key: GIPHY_API_KEY,
        q: input,
        limit: 24,
        offset: page ? page * 24 - 24 : 0
      }
    });

    database.history.save(input, user.id);

    const {
      data,
      pagination: { total_count: total },
      meta: { status }
    } = giphyResponse;

    if (status === 200) {
      const filteredData = data.map(({ url, images, title }) => {
        const imageStored = database.like.byUrl(url);
        const liked = (imageStored && imageStored.likedBy.includes(user.id)) || false;

        return { url, images, liked, title };
      });

      res.send({
        data: filteredData,
        total
      });
    } else {
      res.send({
        message: 'giphy API error'
      });
    }
  } catch (error) {
    res.send(error.message ? error.message : error);
  }
};

export default searchImage;
