import React, { useState } from "react";
import classes from "./addNewMessageForm.module.css";
import PropTypes from "prop-types";
import moment from "moment";

const AddNewMessageForm = ({ addMessage, userId }) => {
    const [newMessageText, setNewMessageText] = useState("");
    const handleAddMessage = (event) => {
        event.preventDefault();
        if (newMessageText.trim()) {
            const time = moment().format("MMM D, YYYY HH:mm:ss");
            addMessage(newMessageText, time, userId);
        }
        setNewMessageText("");
    };
    const handleChange = ({ target }) => {
        setNewMessageText(target.value);
    };

    return (
        <form className={classes.newMessageWrap} onSubmit={handleAddMessage}>
            <textarea
                className={classes.newMessage}
                placeholder="write new message here..."
                value={newMessageText}
                onChange={handleChange}
            />
            <button
                className={classes.newMessageSubmitButton}
                title="Send message"
            >
                &#10148;
            </button>
        </form>
    );
};
AddNewMessageForm.propTypes = {
    userId: PropTypes.string,
    addMessage: PropTypes.func
};

export default AddNewMessageForm;
