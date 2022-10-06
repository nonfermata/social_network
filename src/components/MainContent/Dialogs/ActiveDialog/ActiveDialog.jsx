import React from "react"
import classes from "./activeDialog.module.css"
import Message from "./message";

const ActiveDialog = ({friendAvatarURL, messages}) => {
    let previousDate
    return (
        <div className={classes.activeDialog}>
            {messages.map(message => {
                const timeArr = message.time.split(' ')
                timeArr.pop()
                const dateStr = timeArr.join(' ')  // get date string
                let dateClass = classes.date + ' ' + classes.dateHidden
                if (dateStr !== previousDate) {
                    previousDate = dateStr
                    dateClass = classes.date
                }

                return (
                    <Message
                        key={message.id}
                        {...message}
                        friendAvatarURL={friendAvatarURL}
                        date={dateStr}
                        dateClass={dateClass}
                    />
                )
            })}
        </div>
    )
}

export default ActiveDialog