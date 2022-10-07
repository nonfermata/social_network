import React from "react"
import classes from './releasedPost.module.css'
import likeAva from '../../../../../assets/like-icon.png'

const ReleasedPost = ({ postNumber, avatarURL, postText, numberOfLikes }) => {
    const {releasedPost, avatar, title, likesBox, likeAnchor, likeImg} = classes
    return (
        <div className={releasedPost}>
            <img className={avatar} src={avatarURL} alt="avatar" />
            <h3 className={title}>Post {postNumber}</h3>
            <div className={classes.postText}>{postText}</div>
            <div className={likesBox}>
                <a className={likeAnchor} href="/"><img className={likeImg} src={likeAva} alt="Like" /></a>
                <div className={classes.numberOfLikes}>{numberOfLikes} likes</div>
            </div>
        </div>
    )
}

export default ReleasedPost