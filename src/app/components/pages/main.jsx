import React, { useEffect } from "react";
import classes from "./main.module.css";
import { Routes, Route, Navigate } from "react-router-dom";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";
import Dialogs from "./dialogs/dialogs";
import Profile from "./profile/profile";
import Users from "./users/users";
import UserPage from "./userPage";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setUsersToStore } from "../../redux/usersReducer";
import { setMessagesToStore } from "../../redux/messagesReducer";
import { setPostsToStore } from "../../redux/postsReducer";
import { useUsers } from "../../hooks/useUsers";
import { usePosts } from "../../hooks/usePosts";
import { useMessages } from "../../hooks/useMessages";
// import Button from "../common/button/button";
// import initialize from "../../mockData/initializeData";

const Main = ({ setUsersToStore, setMessagesToStore, setPostsToStore }) => {
    const { users } = useUsers();
    const { posts } = usePosts();
    const { messages } = useMessages();
    useEffect(() => {
        setUsersToStore(users);
        setPostsToStore(posts);
        setMessagesToStore(messages);
    }, []);

    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/social_network" element={<Navigate to="/profile" replace />} />
                <Route path="/:userId" element={<UserPage />} />
                <Route path="/dialogs/*" element={<Dialogs />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<Users />} />
                <Route path="/" element={<Navigate to="/profile" replace />} />
            </Routes>
            {/*<Button onClick={initialize}>Восстановить БД</Button>*/}
        </main>
    );
};
Main.propTypes = {
    setUsersToStore: PropTypes.func,
    setPostsToStore: PropTypes.func,
    setMessagesToStore: PropTypes.func
};

const mapDispatchToProps = {
    setUsersToStore,
    setMessagesToStore,
    setPostsToStore
};

export default connect(() => ({}), mapDispatchToProps)(Main);
