import React from "react"
import classes from "./dialogsList.module.css"
import DialogItem from "./dialogItem/dialogItem";
import {dialogs} from "../../../../data/dialogs";

const DialogsList = () => {
    return (
        <ul className={classes.dialogsList}>
            {dialogs.map(friend => (
                <DialogItem
                    key={friend.id}
                    name={friend.name}
                    id={friend.id}
                    avatarURL={friend.avatarURL}/>
            ))}
        </ul>
    )
}

export default DialogsList