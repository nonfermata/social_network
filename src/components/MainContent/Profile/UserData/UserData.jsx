import React from 'react'
import classes from './userData.module.css'

const UserData = ({ profileAvatarURL, name, dateOfBirth, city, website, phone }) => {
    const { userData, avatar, description, tittleName, value, contacts } = classes
    return (
        <div className={userData}>
            <img className={avatar} src={profileAvatarURL} alt='avatar' />
            <div className={description}>
                <h1 className={tittleName}>{name}</h1>
                <p>Date of birth: <span className={value}>{dateOfBirth}</span></p>
                <p>City: <span className={value}>{city}</span></p>
                <div class={contacts}>
                    <p>Web-site: <span className={value}>{website}</span></p>
                    <p>Telephon: <span className={value}>{phone}</span></p>
                </div>
            </div>
        </div>
    )
}

export default UserData
