import React from "react"
import classes from "./mainContent.module.css"
import { Routes, Route } from "react-router-dom"
import Profile from "./profile/profile"
import Dialogs from "./dialogs/dialogs"
import News from "./news/news"
import Music from "./music/music"
import Settings from "./settings/settings"

const MainContent = ({profile, posts, dialogs}) => {
    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/profile" element={<Profile profile={profile} posts={posts}/>} />
                <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} profileAvatarURL={profile.avatarURL}/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/music" element={<Music/>} />
                <Route path="/settings" element={<Settings/>} />
            </Routes>
        </main>
    )
}

export default MainContent