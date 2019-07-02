import './env';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import controllers from './controllers';

const PORT = process.env.PORT || 9001;

const server = express();
const router = express.Router();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

router.get('/login', controllers.auth.login);
router.get('/check_token', controllers.auth.checkToken);
router.post('/register', controllers.auth.register);

router.post('/search', controllers.giphyApi.search);

// router.get('/history')

server.use('/api', router);
server.listen(PORT);

console.log(`server is started on ${PORT}`);
