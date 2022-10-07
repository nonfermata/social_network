import React from "react"
import classes from "./dialogsList.module.css"
import DialogLink from "./dialogLink";

const DialogsList = ({dialogs}) => {
    const dialogsListHTML = dialogs.map(friend => (
        <DialogLink
            key={friend.id}
            name={friend.name}
            id={friend.id}
            avatarURL={friend.avatarURL}/>
    ))
    return (
        <ul className={classes.dialogsList}>
            {dialogsListHTML}
        </ul>
    )
}

export default DialogsList