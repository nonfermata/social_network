import React from 'react'
import classes from './profile.module.css'
import TopImage from './topImage/topImage'
import UserData from './userData/userData'
import Posts from './posts/posts'
import { user } from "../../../data/userData";

const Content = () => {
    return (
        <div className={classes.profile}>
            <TopImage />
            <div className={classes.content}>
                <UserData
                    avatar={user.avatar}
                    name={user.name}
                    dateOfBirth={user.dateOfBirth}
                    city={user.city}
                    website={user.website}
                    phone={user.phone}
                />
                <Posts />
            </div>
        </div>
    )
}

export default Content