import React from 'react';
import classes from "./activeDialog.module.css";
import {mainUser} from "../../../../data/mainUserData";

const Message = ({type, text, time, date, dateClass, friendAvatarURL}) => {
    const {
        outgoingMessage,
        outgoingMessageWrap,
        incomingMessage,
        incomingMessageWrap,
        avatar,
        avatarRight
    } = classes
    let messageClass = outgoingMessage
    let messageWrapClass = outgoingMessageWrap
    let avatarHTML = mainUser.profileAvatarURL
    let avatarClass = avatar
    const timeStr = time.split(' ')[3].split(':')[0] + ':' + time.split(' ')[3].split(':')[1]  // get time (without seconds)
    if (type === 'incoming') {
        messageClass = incomingMessage
        messageWrapClass = incomingMessageWrap
        avatarHTML = friendAvatarURL
        avatarClass = avatar + ' ' + avatarRight
    }
    return (
        <div>
            <div className={dateClass}>
                {date}
            </div>
            <div className={messageWrapClass}>
                <img className={avatarClass} src={avatarHTML} alt="avatar"/>
                <div className={messageClass}>
                    {text}
                    <div className={classes.time}>
                        {timeStr}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;