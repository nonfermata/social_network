import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import profileService from "../services/profileService";
import { toast } from "react-toastify";
import Loader from "../utils/loader/loader";

const ProfileContext = React.createContext();

export const useProfile = () => useContext(ProfileContext);

const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProfile();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    async function getProfile() {
        try {
            const content = await profileService.get();
            setProfile(content);
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
        <ProfileContext.Provider value={{ profile }}>
            {!isLoading ? children : <Loader/>}
        </ProfileContext.Provider>
    );
};
ProfileProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProfileProvider;
