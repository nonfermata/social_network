import { combineReducers, createStore } from "redux";
import menuReducer from "./menuReducer";
import profileReducer from "./profileReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import messagesReducer from "./messagesReducer";

const reducers = combineReducers({
    menu: menuReducer,
    profile: profileReducer,
    posts: postsReducer,
    users: usersReducer,
    messages: messagesReducer
});
const store = createStore(reducers);

export default store;
