"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
const express = require("express");
const bodyParser = require("body-parser");
const controllers_1 = require("./controllers");
const PORT = process.env.PORT || 9001;
const server = express();
const router = express.Router();
server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    next();
});
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
router.post('/login', controllers_1.default.auth.login);
router.post('/check_token', controllers_1.default.auth.checkToken);
router.post('/register', controllers_1.default.auth.register);
router.post('/search', controllers_1.default.giphyApi.search);
router.post('/like', controllers_1.default.image.like);
router.get('/history', controllers_1.default.history.get);
router.delete('/history', controllers_1.default.history.delete);
server.use('/api', router);
server.listen(PORT);
console.log(`server is started on ${PORT}`);
//# sourceMappingURL=server.js.map