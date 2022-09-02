import React from 'react'
import classes from './UserData.module.css'

const UserData = props => {
    return (
        <div className={classes.userData}>
            <img className={classes.avatar} src={props.avatar}/>
            <div className={classes.description}>
                <h1 className={classes.tittleName}>{props.name}</h1>
                <p>Date of birth: <span className={classes.value}>{props.dateOfBirth}</span></p>
                <p>City: <span className={classes.value}>{props.city}</span></p>
                <div class={classes.contacts}>
                    <p>Web-site: <span className={classes.value}>{props.website}</span></p>
                    <p>Telephon: <span className={classes.value}>{props.phone}</span></p>
                </div>
            </div>
        </div>
    )
}

export default UserData
