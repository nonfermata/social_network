import React from "react";
import classes from "./pageContent.module.css";
import { Routes, Route } from "react-router-dom";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";
import DialogsContainer from "./dialogs/dialogsContainer";
import ProfileContainer from "./profile/profileContainer";

const PageContent = () => {
    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/profile" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </main>
    );
};

export default PageContent;
