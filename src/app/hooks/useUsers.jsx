import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import usersService from "../services/usersService";
import { toast } from "react-toastify";
import Loader from "../utils/loader/loader";

const UsersContext = React.createContext();

export const useUsers = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    async function getUsers() {
        try {
            const content = await usersService.get();
            setUsers(content);
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
        <UsersContext.Provider value={{ users }}>
            {!isLoading ? children : <Loader/>}
        </UsersContext.Provider>
    );
};
UsersProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default UsersProvider;
