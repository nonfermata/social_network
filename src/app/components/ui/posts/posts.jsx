import React from "react";
import AddPostForm from "./addPostForm/addPostForm";
import PropTypes from "prop-types";
import PostsList from "./postsList/postsList";
import { connect } from "react-redux";
import { addPostAC } from "../../../redux/postsReducer";

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

const mapStateToProps = (state) => ({
    posts: state.posts,
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (newPost) => {
        dispatch(addPostAC(newPost));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
