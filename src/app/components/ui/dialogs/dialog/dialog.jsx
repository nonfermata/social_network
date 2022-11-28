import React from "react";
import classes from "./dialog.module.css";
import Message from "../message/message";
import PropTypes from "prop-types";
import AddMessageForm from "../addMessageForm/addMessageForm";
import getTimeAndDate from "../../../../utils/getTimeAndDate";
import _ from "lodash";
import { connect } from "react-redux";
import {
    addMessageAC,
    deleteMessageAC
} from "../../../../redux/messagesReducer";

const Dialog = ({
    userId,
    userAvatarURL,
    messages,
    profileAvatarURL,
    addMessage,
    deleteMessage
}) => {
    const userMessages = _.orderBy(
        messages.filter((message) => message.userId === userId),
        ["created_at"],
        ["asc"]
    );
    let previousDate;
    return (
        <div className={classes.dialogWrap}>
            {userMessages.map((message) => {
                const time = getTimeAndDate(message.created_at).time;
                const date = getTimeAndDate(message.created_at).date;

                let dateClass = classes.date + " hidden";
                if (date !== previousDate) {
                    previousDate = date;
                    dateClass = classes.date;
                }

                return (
                    <Message
                        {...message}
                        key={message._id}
                        time={time}
                        date={date}
                        dateClass={dateClass}
                        userId={userId}
                        userAvatarURL={userAvatarURL}
                        profileAvatarURL={profileAvatarURL}
                        deleteMessage={deleteMessage}
                    />
                );
            })}
            <AddMessageForm addMessage={addMessage} userId={userId} />
        </div>
    );
};
Dialog.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    profileAvatarURL: PropTypes.string,
    userId: PropTypes.string,
    userAvatarURL: PropTypes.string,
    addMessage: PropTypes.func,
    deleteMessage: PropTypes.func
};

const mapStateToProps = ({ messages, profile }) => ({
    messages,
    profileAvatarURL: profile.avatarURL
});

const mapDispatchToProps = (dispatch) => ({
    addMessage: (newMessage) => {
        dispatch(addMessageAC(newMessage));
    },
    deleteMessage: (messageId) => {
        dispatch(deleteMessageAC(messageId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
