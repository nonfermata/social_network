import React, {useState} from 'react';
import classes from "./dialog.module.css";
import deleteIcon from "../../../../assets/delete-icon.png";

const Message = ({id, type, text, time, date, dateClass, friendAvatarURL, profileAvatarURL, onDeleteMessage}) => {

    let messageClass = classes.outgoingMessage
    let messageWrapClass = classes.outgoingMessageWrap
    let avatarURL = profileAvatarURL
    let avatarClass = classes.avatar
    const [optionClass, setOptionClass] = useState(classes.options + ' ' + classes.hidden)
    if (type === 'incoming') {
        messageClass = classes.incomingMessage
        messageWrapClass = classes.incomingMessageWrap
        avatarURL = friendAvatarURL
        avatarClass = classes.avatar + ' ' + classes.avatarRight
    }

    const showOptions = () => {
        setOptionClass(classes.options)
    }

    const hideOptions = () => {
        setOptionClass(classes.options + ' ' + classes.hidden)
    }

    return (
        <div>
            <div className={dateClass}>
                {date}
            </div>
            <div className={messageWrapClass}>
                <img className={avatarClass} src={avatarURL} alt="avatar"/>
                <div className={messageClass}  onMouseOver={showOptions} onMouseLeave={hideOptions}>
                    <div className={optionClass}>
                        <img className={classes.deleteMessage}
                             src={deleteIcon}
                             alt="Delete"
                             title="Delete"
                             onClick={() => onDeleteMessage(id)}/>
                    </div>
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