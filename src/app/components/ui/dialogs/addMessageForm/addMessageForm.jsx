import React, { useEffect, useState } from "react";
import classes from "./addMessageForm.module.css";
import PropTypes from "prop-types";
import TextareaField from "../../../common/form/textareaField";
import Button from "../../../common/button/button";
import httpService from "../../../../services/http.service";

const AddMessageForm = ({ addMessage, userId }) => {
    const newMessageInitialState = {
        content: "",
        userId
    };
    const [newMessage, setNewMessage] = useState({});
    useEffect(() => {
        setNewMessage(newMessageInitialState);
    }, [userId]);

    const addMsgToDB = () => {
        const message = {
            ...newMessage,
            _id: String(Date.now()),
            created_at: Date.now(),
            type: "outgoing"
        };
        httpService.put("messages/" + message._id, message);
    };

    const handleAddMessage = (event) => {
        event.preventDefault();
        if (newMessage.content.trim()) {
            addMsgToDB();
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
                extraClass="textareaAddMsg"
                name="content"
                value={newMessage.content}
                onChange={handleChange}
                placeholder="write new message here..."
            />
            <Button extraClass="addMsgBtn" title="Send message">
                &#10148;
            </Button>
        </form>
    );
};
AddMessageForm.propTypes = {
    userId: PropTypes.string,
    addMessage: PropTypes.func
};

export default AddMessageForm;
