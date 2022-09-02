import React from "react"
import classes from "./MainContent.module.css"
import { Routes, Route } from "react-router-dom"
import Profile from "./Profile/Profile"
import Dialogs from "./Dialogs/Dialogs"
import News from "./News/News"
import Music from "./Music/Music"
import Settings from "./Settings/Settings"

const MainContent = () => {
    return (
        <main className={classes.main}>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dialogs/*" element={<Dialogs />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </main>
    )
}

export default MainContent