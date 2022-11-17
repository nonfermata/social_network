import React from "react";
import AddPostForm from "./addPostForm/addPostForm";
import PropTypes from "prop-types";
import PostsList from "./postsList/postsList";

const Posts = ({ posts, users, addPost }) => {
    return (
        <div>
            <AddPostForm users={users} addPost={addPost} />
            <PostsList posts={posts} users={users} />
        </div>
    );
};
Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    users: PropTypes.arrayOf(PropTypes.object),
    addPost: PropTypes.func
};

export default Posts;
