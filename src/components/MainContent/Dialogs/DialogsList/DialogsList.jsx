import React from "react"
import classes from "./dialogsList.module.css"
import DialogItem from "./dialogItem/dialogItem";
import { dialogsData } from "../../../../data/dialogsData";

const dialogsItems = dialogsData.map(el => {
    return <DialogItem
        key={el.id}
        name={el.name}
        id={el.id}
        avatarURL={el.avatarURL} />
})

const DialogsList = () => {
    return (
        <ul className={classes.dialogsList}>
            {dialogsItems}
        </ul>
    )
}

export default DialogsList