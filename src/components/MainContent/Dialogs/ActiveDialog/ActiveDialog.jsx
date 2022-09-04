import React from "react"
import classes from "./ActiveDialog.module.css"
import { user } from "../../../../data/userData";

let previousDate = ''
const ActiveDialog = props => {
    const allMessages = props.incom.concat(props.outcom)
    allMessages.sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
    const allMessagesHTML = allMessages.map((el, index) => {
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

        const timeArr = el.time.split(' ')  // get time (without seconds)
        const timeStr = timeArr[3].split(':')[0] + ':' + timeArr[3].split(':')[1]

        timeArr.pop()  // get date
        const dateStr = timeArr.join(' ')

        let dateStyle = classes.date + ' ' + classes.dateHidden
        if (dateStr !== previousDate) {
            previousDate = dateStr
            dateStyle = classes.date
        }

        return (
            <div>
                <div className={dateStyle}>
                    {dateStr}
                </div>
                <div className={messageWrapClass}>
                    <img className={classes.avatar} src={avatar} alt="avatar" />
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