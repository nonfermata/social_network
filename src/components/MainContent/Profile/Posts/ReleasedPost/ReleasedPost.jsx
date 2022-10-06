import React from "react"
import classes from './releasedPost.module.css'
import likeAva from '../../../../../data/assets/like-icon.png'

const ReleasedPost = ({ id, postNumber, avatarURL, postText, numberOfLikes }) => {
    return (
        <div className={classes.releasedPost}>
            <img className={classes.avatar} src={avatarURL} alt="avatar" />
            <h3 className={classes.title}>Post {postNumber}</h3>
            <div className={classes.postText}>{postText}</div>
            <div className={classes.likesBox}>
                <a className={classes.likeAnchor} href="#"><img className={classes.likeImg} src={likeAva} alt="Like" /></a>
                <div className={classes.numberOfLikes}>{numberOfLikes} likes</div>
            </div>
        </div>
    )
}

export default ReleasedPost