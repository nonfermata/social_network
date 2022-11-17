import React from "react";
import classes from "./post.module.css";
import likeIcon from "../../../../assets/like-icon.png";
import PropTypes from "prop-types";
import getPublishedTime from "../../../../utils/getPublishedTime";

const Post = ({ avatarURL, createdAt, title, content, likes }) => {
    const { post, avatar, time, postTitle, postText, numberOfLikes, likesBox, likeAnchor, likeImg } =
        classes;
    const publishedTime = getPublishedTime(createdAt);
    return (
        <div className={post}>
            <img className={avatar} src={avatarURL} alt="avatar" />
            <div className={time}>{publishedTime}</div>
            <h3 className={postTitle}>{title}</h3>
            <div className={postText}>{content}</div>
            <div className={likesBox}>
                <a className={likeAnchor} href="/">
                    <img className={likeImg} src={likeIcon} alt="Like" />
                </a>
                <div className={numberOfLikes}>
                    {likes} likes
                </div>
            </div>
        </div>
    );
};
Post.propTypes = {
    avatarURL: PropTypes.string,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number
};

export default Post;
