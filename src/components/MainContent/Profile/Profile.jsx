import React from 'react'
import classes from './Profile.module.css'
import TopImage from './TopImage/TopImage'
import UserData from './UserData/UserData'
import Posts from './Posts/Posts'
import {user} from "../../../data/data";

const Content = () => {
    return (
            <div className={classes.profile}>
                <TopImage/>
                <div className={classes.content}>
                    <UserData
                        avatar={user.avatar}
                        name={user.name}
                        dateOfBirth={user.dateOfBirth}
                        city={user.city}
                        website={user.website}
                        phone={user.phone}
                    />
                    <Posts/>
                </div>
            </div>
    )
}

export default Content