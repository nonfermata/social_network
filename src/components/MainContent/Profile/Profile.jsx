import React from 'react'
import classes from './profile.module.css'
import TopImage from './topImage/topImage'
import UserData from './userData/userData'
import Posts from './posts/posts'

const Profile = ({profile, posts}) => {
    return (
        <div className={classes.profile}>
            <TopImage />
            <div className={classes.content}>
                <UserData
                    profileAvatarURL={profile.avatarURL}
                    name={profile.name}
                    dateOfBirth={profile.dateOfBirth}
                    city={profile.city}
                    website={profile.website}
                    phone={profile.phone}
                />
                <Posts posts={posts}/>
            </div>
        </div>
    )
}

export default Profile