import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import messagesService from "../services/messagesService";
import { toast } from "react-toastify";
import Loader from "../utils/loader/loader";

const MessagesContext = React.createContext();

export const useMessages = () => useContext(MessagesContext);

const MessagesProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMessages();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    async function getMessages() {
        try {
            const content = await messagesService.get();
            setMessages(content);
            setIsLoading(false);
        } catch (e) {
            errorCatcher(e);
        }
    }

    function errorCatcher(e) {
        const { message } = e.response.data;
        setError(message);
    }

    return (
        <MessagesContext.Provider value={{ messages }}>
            {!isLoading ? children : <Loader/>}
        </MessagesContext.Provider>
    );
};
MessagesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default MessagesProvider;
