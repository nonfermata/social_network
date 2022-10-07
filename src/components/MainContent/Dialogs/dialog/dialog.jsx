import React from "react"
import classes from "./dialog.module.css"
import Message from "./message";

const Dialog = ({friendAvatarURL, messages, profileAvatarURL}) => {
    let previousDate
    return (
        <div className={classes.activeDialog}>
            {messages.map(message => {
                const timeArray = message.time.split(' ')
                const timeString = timeArray[3].split(':')[0] + ':' + timeArray[3].split(':')[1]  // get time (without seconds)
                timeArray.pop()
                const dateString = timeArray.join(' ')  // get date string

                let dateClass = classes.date + ' ' + classes.dateHidden
                if (dateString !== previousDate) {
                    previousDate = dateString
                    dateClass = classes.date
                }

                return (
                    <Message
                        key={message.id}
                        {...message}
                        time={timeString}
                        date={dateString}
                        dateClass={dateClass}
                        friendAvatarURL={friendAvatarURL}
                        profileAvatarURL={profileAvatarURL}
                    />
                )
            })}
        </div>
    )
}

export default Dialog