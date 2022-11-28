import React from "react";
import Post from "../post/post";
import PropTypes from "prop-types";
import _ from "lodash";

const PostsList = ({ posts, users }) => {
    const orderedPosts = _.orderBy(posts, ["created_at"], ["desc"]);
    return (
        <>
            {orderedPosts.map((post) => {
                const author = users.find((user) => user._id === post.authorId);
                return (
                    <Post
                        key={post._id}
                        author={author.name}
                        avatarURL={author.avatarURL}
                        createdAt={post.created_at}
                        title={post.title}
                        content={post.content}
                        likes={post.likes}
                    />
                );
            })}
        </>
    );
};
PostsList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    users: PropTypes.arrayOf(PropTypes.object)
};

export default PostsList;
