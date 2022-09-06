import React from "react"
import classes from "./activeDialog.module.css"
import {user} from "../../../../data/userData";

let previousDate = ''
const ActiveDialog = props => {
    const messages = props.messages.map(el => {
        let messageClass, messageWrapClass, avatarURL, avatarClass
        if (el.type === 'outgoing') {
            messageClass = classes.outgoingMessage
            messageWrapClass = classes.outgoingMessageWrap
            avatarURL = user.avatar
            avatarClass = classes.avatar
        } else if (el.type === 'incoming') {
            messageClass = classes.incomingMessage
            messageWrapClass = classes.incomingMessageWrap
            avatarURL = props.avaURL
            avatarClass = classes.avatar + ' ' + classes.avatarRight
        }

        const timeArr = el.time.split(' ')  // get time (without seconds)
        const timeStr = timeArr[3].split(':')[0] + ':' + timeArr[3].split(':')[1]

        timeArr.pop()  // get date
        const dateStr = timeArr.join(' ')

        let dateClass = classes.date + ' ' + classes.dateHidden
        if (dateStr !== previousDate) {
            previousDate = dateStr
            dateClass = classes.date
        }

        return (  // render one message
            <div key={el.id}>
                <div className={dateClass}>
                    {dateStr}
                </div>
                <div className={messageWrapClass}>
                    <img className={avatarClass} src={avatarURL} alt="avatar"/>
                    <div className={messageClass}>
                        {el.text}
                        <div className={classes.time}>
                            {timeStr}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className={classes.activeDialog}>
            {messages}
        </div>
    )
}

export default ActiveDialog