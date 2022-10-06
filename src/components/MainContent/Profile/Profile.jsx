import React from 'react'
import classes from './profile.module.css'
import TopImage from './topImage/topImage'
import UserData from './userData/userData'
import Posts from './posts/posts'
import { mainUser } from "../../../data/mainUserData";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <TopImage />
            <div className={classes.content}>
                <UserData
                    profileAvatarURL={mainUser.profileAvatarURL}
                    name={mainUser.name}
                    dateOfBirth={mainUser.dateOfBirth}
                    city={mainUser.city}
                    website={mainUser.website}
                    phone={mainUser.phone}
                />
                <Posts />
            </div>
        </div>
    )
}

export default Profile