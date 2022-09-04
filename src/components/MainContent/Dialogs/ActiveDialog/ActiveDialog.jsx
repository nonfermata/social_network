import React from "react"
import classes from "./ActiveDialog.module.css"
import { user } from "../../../../data/userData";

let previousDate = ''
const ActiveDialog = props => {
    const allMessages = props.incom.concat(props.outcom)
    allMessages.sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
    const allMessagesHTML = allMessages.map(el => {
        let messageClass, messageWrapClass, avatar, avatarClass
        if (el.type === 'incomming') {
            messageClass = classes.incomingMessage
            messageWrapClass = classes.incomingMessageWrap
            avatar = props.avaURL
            avatarClass = classes.avatar + ' ' + classes.avatarRight
        } else {
            messageClass = classes.outcomingMessage
            messageWrapClass = classes.outcomingMessageWrap
            avatar = user.avatar
            avatarClass = classes.avatar
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

        return (
            <div>
                <div className={dateClass}>
                    {dateStr}
                </div>
                <div className={messageWrapClass}>
                    <img className={avatarClass} src={avatar} alt="avatar" />
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
            {allMessagesHTML}
        </div>
    )
}

export default ActiveDialog