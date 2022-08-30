import React from 'react'
import classes from './Profile.module.css'
import TopImage from './TopImage/TopImage'
import UserData from './UserData/UserData'
import Posts from './Posts/Posts'

const Content = () => {
    return (
        <main className={classes.main}>
            <TopImage />
            <div className={classes.content}>
                <UserData />
                <Posts />
            </div>
        </main>
    )
}

export default Content