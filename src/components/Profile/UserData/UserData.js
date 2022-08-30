import React from 'react'
import classes from './UserData.module.css'

const UserData = () => {
    return (
        <div className={classes.userData}>
            <div className={classes.avatar}></div>
            <div className={classes.description}>
                <h1 className={classes.name}>Dmitry Baulin</h1>
                <p>Date of birth: <span className={classes.dateOfBirth}>10.09.1975</span></p>
                <p>City: <span className={classes.city}>Moscow</span></p>
                <div class={classes.contacts}>
                    <p>Web-site: <span className={classes.webSite}>https://febrecords.ru</span></p>
                    <p>Telephon: <span className={classes.telefon}>+ 7 999 1234567</span></p>
                </div>
            </div>
        </div>
    )
}

export default UserData
