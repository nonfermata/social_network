import React, {useState} from "react"
import classes from "./dialog.module.css"
import Message from "./message";
import moment from "moment";
import {addMessageAction, deleteMessageAction} from "../../../../cotstants";

const Dialog = ({friendId, messages, friendAvatarURL, profileAvatarURL, addMessage, deleteMessage}) => {
    const [newMessageText, setNewMessageText] = useState("")
    const newMessage = React.createRef()
    const startNewMessage = () => {
        if (newMessageText.trim()) {
            const time = moment().format("MMM D, YYYY HH:mm:ss");
            addMessage(addMessageAction(newMessageText, time, friendId))
        }
            setNewMessageText("")
    }
    const onTextMessageChange = () => {
        setNewMessageText(newMessage.current.value)
    }

    const onDeleteMessage = (messageId) => {
        deleteMessage(deleteMessageAction(messageId, friendId))
    }

    let previousDate
    return (
        <div className={classes.activeDialog}>
            {messages.map(message => {
                const timeArray = message.time.split(' ')
                const timeString = timeArray[3].split(':')[0] + ':' + timeArray[3].split(':')[1]  // get time (without seconds)
                timeArray.pop()
                const dateString = timeArray.join(' ')  // get date string

                let dateClass = classes.date + ' ' + classes.hidden
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
                        onDeleteMessage={onDeleteMessage}
                    />
                )
            })}
            <div className={classes.newMessageWrap}>
                <textarea
                    className={classes.newMessage}
                    onChange={onTextMessageChange}
                    ref={newMessage}
                    placeholder="write new message here..."
                    value={newMessageText}
                />
                <button
                    className={classes.newMessageSubmitButton}
                    onClick={startNewMessage}
                    title="Send message"
                >
                    &#10148;
                </button>
            </div>
        </div>
    )
}

export default Dialog