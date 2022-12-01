import { combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import messagesReducer from "./messagesReducer";

const reducers = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    messages: messagesReducer
});
const store = createStore(reducers);

export default store;
