import React from "react"
import classes from './Released.module.css'
import likeAva from '../../../../../data/assets/like-icon.png'

const ReleasedPost = props => {
    return (
        <div className={classes.releasedPost}>
            <img className={classes.avatar} src={props.avaURL} alt="avatar" />
            <h3 className={classes.title}>Post {props.id}</h3>
            <div className={classes.postText}>{props.postText}</div>
            <div className={classes.likesBox}>
                <a className={classes.likeAnchor} href="#"><img className={classes.likeImg} src={likeAva} alt="Like" /></a>
                <div className={classes.numberOfLikes}>{props.numberOfLikes} likes</div>
            </div>
        </div>
    )
}

export default ReleasedPost