"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../env");
const axios_1 = require("axios");
const database_1 = require("../../database");
const { GIPHY_API_KEY } = process.env;
const rootUrl = 'https://api.giphy.com/v1/gifs/search';
const searchImage = async (req, res) => {
    try {
        const { username, input, page } = req.body;
        const user = database_1.default.user.byLogin(username);
        const { data: giphyResponse } = await axios_1.default.get(rootUrl, {
            params: {
                api_key: GIPHY_API_KEY,
                q: input,
                limit: 24,
                offset: page ? page * 24 - 24 : 0
            }
        });
        database_1.default.history.save(input, user.id);
        const { data, pagination: { total_count: total }, meta: { status } } = giphyResponse;
        if (status === 200) {
            const filteredData = data.map(({ url, images, title }) => {
                const imageStored = database_1.default.like.byUrl(url);
                const liked = (imageStored && imageStored.likedBy.includes(user.id)) || false;
                return { url, images, liked, title };
            });
            res.send({
                data: filteredData,
                total
            });
        }
        else {
            res.send({
                message: 'giphy API error'
            });
        }
    }
    catch (error) {
        res.send(error.message ? error.message : error);
    }
};
exports.default = searchImage;
//# sourceMappingURL=search.js.map