import React, { useEffect } from "react";
import classes from "./main.module.css";
import { Routes, Route } from "react-router-dom";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";
import Dialogs from "./dialogs/dialogs";
import Profile from "./profile/profile";
import Users from "./users/users";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setUsersToStoreAC } from "../../redux/usersReducer";
import { setMessagesToStoreAC } from "../../redux/messagesReducer";
import { setPostsToStoreAC } from "../../redux/postsReducer";
import { setProfileToStoreAC } from "../../redux/profileReducer";
import { useUsers } from "../../hooks/useUsers";
import { usePosts } from "../../hooks/usePosts";
import { useMessages } from "../../hooks/useMessages";
import { useProfile } from "../../hooks/useProfile";
// import api from "../../api";

const Main = ({
    setUsersToStore,
    setMessagesToStore,
    setPostsToStore,
    setProfileToStore
}) => {
    const { users } = useUsers();
    const { posts } = usePosts();
    const { messages } = useMessages();
    const { profile } = useProfile();
    useEffect(() => {
        setUsersToStore(users);
        setPostsToStore(posts);
        setMessagesToStore(messages);
        setProfileToStore(profile);
    }, []);

    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dialogs/*" element={<Dialogs />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </main>
    );
};
Main.propTypes = {
    setUsersToStore: PropTypes.func,
    setPostsToStore: PropTypes.func,
    setMessagesToStore: PropTypes.func,
    setProfileToStore: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    setUsersToStore: (users) => {
        dispatch(setUsersToStoreAC(users));
    },
    setMessagesToStore: (messages) => {
        dispatch(setMessagesToStoreAC(messages));
    },
    setPostsToStore: (posts) => {
        dispatch(setPostsToStoreAC(posts));
    },
    setProfileToStore: (profile) => {
        dispatch(setProfileToStoreAC(profile));
    }
});

export default connect(() => ({}), mapDispatchToProps)(Main);
