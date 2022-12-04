import React, { useState } from "react";
import classes from "./message.module.css";
import deleteIcon from "../../../../assets/delete-icon.png";
import PropTypes from "prop-types";

const Message = ({
    _id,
    type,
    content,
    time,
    date,
    dateClass,
    userAvatarURL,
    profileAvatarURL,
    deleteMessage
}) => {
    let messageClass = classes.outgoingMessage;
    let messageWrapClass = classes.outgoingMessageWrap;
    let avatarURL = profileAvatarURL;
    let avatarClass = classes.avatar;
    const [deleteBtnClass, setDeleteBtnClass] = useState(
        classes.deleteBtn + " hidden"
    );
    if (type === "incoming") {
        messageClass = classes.incomingMessage;
        messageWrapClass = classes.incomingMessageWrap;
        avatarURL = userAvatarURL;
        avatarClass = classes.avatar + " " + classes.avatarRight;
    }

    const showOptions = () => {
        setDeleteBtnClass(classes.deleteBtn);
    };

    const hideOptions = () => {
        setDeleteBtnClass(classes.deleteBtn + " hidden");
    };

    return (
        <div>
            <div className={dateClass}>{date}</div>
            <div className={messageWrapClass}>
                <img className={avatarClass} src={avatarURL} alt="avatar" />
                <div
                    className={messageClass}
                    onMouseOver={showOptions}
                    onMouseLeave={hideOptions}
                >
                    <img
                        className={deleteBtnClass}
                        src={deleteIcon}
                        alt="Delete"
                        title="Delete"
                        onClick={() => deleteMessage(_id)}
                    />
                    {content}
                    <div className={classes.time}>{time}</div>
                </div>
            </div>
        </div>
    );
};
Message.propTypes = {
    _id: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    dateClass: PropTypes.string,
    userAvatarURL: PropTypes.string,
    profileAvatarURL: PropTypes.string,
    deleteMessage: PropTypes.func
};

export default Message;
