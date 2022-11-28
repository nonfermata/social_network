import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import postsService from "../services/postsService";
import { toast } from "react-toastify";
import Loader from "../utils/loader/loader";

const PostsContext = React.createContext();

export const usePosts = () => useContext(PostsContext);

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    async function getPosts() {
        try {
            const content = await postsService.get();
            setPosts(content);
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
        <PostsContext.Provider value={{ posts }}>
            {!isLoading ? children : <Loader/>}
        </PostsContext.Provider>
    );
};
PostsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default PostsProvider;
