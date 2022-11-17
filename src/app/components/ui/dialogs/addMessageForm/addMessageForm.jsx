import React, { useEffect, useState } from "react";
import classes from "./addMessageForm.module.css";
import PropTypes from "prop-types";
import TextareaField from "../../../common/form/textareaField";

const AddMessageForm = ({ addMessage, userId }) => {
    const newMessageInitialState = {
        content: "",
        userId
    };
    const [newMessage, setNewMessage] = useState({});
    useEffect(() => {
        setNewMessage(newMessageInitialState);
    }, [userId]);

    const handleAddMessage = (event) => {
        event.preventDefault();
        if (newMessage.content.trim()) {
            addMessage(newMessage);
            setNewMessage(newMessageInitialState);
        }
    };

    const handleChange = ({ target }) => {
        setNewMessage((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <form className={classes.addMessageForm} onSubmit={handleAddMessage}>
            <TextareaField
                extraClass="textarea-message"
                name="content"
                value={newMessage.content}
                onChange={handleChange}
                placeholder="write new message here..."
            />

            <button className={classes.addMessageButton} title="Send message">
                &#10148;
            </button>
        </form>
    );
};
AddMessageForm.propTypes = {
    userId: PropTypes.string,
    addMessage: PropTypes.func
};

export default AddMessageForm;
