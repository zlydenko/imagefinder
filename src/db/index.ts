import { DataStore } from "notarealdb";

import { History } from "./history";
import { Like } from "./likes";
import { User } from "./users";

const store = new DataStore("./data");

const history = store.collection<History>("history");
const likes = store.collection<Like>("likes");
const users = store.collection<User>("users");

export default { history, likes, users };
