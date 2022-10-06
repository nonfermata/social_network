import React from "react"
import classes from "./mainContent.module.css"
import { Routes, Route } from "react-router-dom"
import Profile from "./profile/profile"
import Dialogs from "./dialogs/dialogs"
import News from "./news/news"
import Music from "./music/music"
import Settings from "./settings/settings"

const MainContent = () => {
    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/profile" element=<Profile/> />
                <Route path="/dialogs/*" element=<Dialogs/> />
                <Route path="/news" element=<News/> />
                <Route path="/music" element=<Music/> />
                <Route path="/settings" element=<Settings/> />
            </Routes>
        </main>
    )
}

export default MainContent