import React from "react";
import classes from "./post.module.css";
import likeIcon from "../../../../assets/like-icon.png";
import PropTypes from "prop-types";
import getPublishedTime from "../../../../utils/getPublishedTime";

const Post = ({ author, avatarURL, createdAt, title, content, likes }) => {
    const { post, postHeader, avatar, authorTimeWrap, postAuthor, time, postTitle, postContent, numberOfLikes, likesBox, likeAnchor, likeImg } =
        classes;
    const publishedTime = getPublishedTime(createdAt);
    return (
        <div className={post}>
            <div className={postHeader}>
                <img className={avatar} src={avatarURL} alt="avatar" />
                <div className={authorTimeWrap}>
                    <div className={postAuthor}>{author}</div>
                    <div className={time}>{publishedTime}</div>
                </div>
            </div>

            <h3 className={postTitle}>{title}</h3>
            <div className={postContent}>{content}</div>
            <div className={likesBox}>
                <a className={likeAnchor} href="/">
                    <img className={likeImg} src={likeIcon} alt="Like" />
                </a>
                <div className={numberOfLikes}>{likes} likes</div>
            </div>
        </div>
    );
};
Post.propTypes = {
    author: PropTypes.string,
    avatarURL: PropTypes.string,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    likes: PropTypes.number
};

export default Post;
