import React from 'react'
import classes from './profile.module.css'
import TopImage from './topImage/topImage'
import UserData from './userData/userData'
import Posts from './posts/posts'

const Profile = ({state}) => {
    return (
        <div className={classes.profile}>
            <TopImage />
            <div className={classes.content}>
                <UserData
                    profileAvatarURL={state.getProfile().avatarURL}
                    name={state.getProfile().name}
                    dateOfBirth={state.getProfile().dateOfBirth}
                    city={state.getProfile().city}
                    website={state.getProfile().website}
                    phone={state.getProfile().phone}
                />
                <Posts state={state}/>
            </div>
        </div>
    )
}

export default Profile