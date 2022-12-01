import React from "react";
import classes from "./dialog.module.css";
import Message from "../message/message";
import PropTypes from "prop-types";
import AddMessageForm from "../addMessageForm/addMessageForm";
import _ from "lodash";
import { connect } from "react-redux";
import { addMessage, deleteMessage } from "../../../../redux/messagesReducer";
import moment from "moment";

const Dialog = ({
    userId,
    userAvatarURL,
    messages,
    profileAvatarURL,
    addMessage,
    deleteMessage
}) => {
    const messagesOrdered = _.orderBy(
        messages.filter((message) => message.userId === userId),
        ["created_at"],
        ["asc"]
    );
    let previousDate;
    return (
        <div className={classes.dialogWrap}>
            {messagesOrdered.map((message) => {
                const time = moment(message.created_at).format("HH:mm");
                const date = moment(message.created_at).format("MMM D, YYYY");

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

const mapStateToProps = ({ messages }) => ({
    messages
});

const mapDispatchToProps = {
    addMessage,
    deleteMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
