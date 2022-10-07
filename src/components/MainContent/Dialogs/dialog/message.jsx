import React from 'react';
import classes from "./dialog.module.css";

const Message = ({type, text, time, date, dateClass, friendAvatarURL, profileAvatarURL}) => {

    let messageClass = classes.outgoingMessage
    let messageWrapClass = classes.outgoingMessageWrap
    let avatarURL = profileAvatarURL
    let avatarClass = classes.avatar
    if (type === 'incoming') {
        messageClass = classes.incomingMessage
        messageWrapClass = classes.incomingMessageWrap
        avatarURL = friendAvatarURL
        avatarClass = classes.avatar + ' ' + classes.avatarRight
    }

    return (
        <div>
            <div className={dateClass}>
                {date}
            </div>
            <div className={messageWrapClass}>
                <img className={avatarClass} src={avatarURL} alt="avatar"/>
                <div className={messageClass}>
                    {text}
                    <div className={classes.time}>
                        {time}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;