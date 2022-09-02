import React from "react"
import classes from "./DialogsList.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {dialogsData} from "../../../../data/data";

const dialogsItems = dialogsData.map(el => {
    return <DialogItem name={el.name} id={el.id} avaURL={el.avaURL}/>
})

const DialogsList = props => {
    return (
        <ul className={classes.dialogsList}>
            {dialogsItems}
        </ul>
    )
}

export default DialogsList