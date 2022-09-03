import React from "react"
import classes from "./ActiveDialog.module.css"
import {user} from "../../../../data/userData";

const ActiveDialog = props => {
    const allMessages = props.incom.concat(props.outcom)
    allMessages.sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
    const allMessagesHTML = allMessages.map(el => {
        let messageClass, messageWrapClass, avatar
        if (el.type === 'incomming') {
            messageClass = classes.incomingMessage
            messageWrapClass = classes.incomingMessageWrap
            avatar = props.avaURL
        } else {
            messageClass = classes.outcomingMessage
            messageWrapClass = classes.outcomingMessageWrap
            avatar = user.avatar
        }
        return (
            <div className={messageWrapClass}>
                <img className={classes.avatar} src={avatar}/>
                <div className={messageClass}>
                    {el.text}
                    <div className={classes.time}>
                        {el.time}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.activeDialog}>
            {allMessagesHTML}
        </div>
    )
}

export default ActiveDialog