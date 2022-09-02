import React from "react"
import classes from './Released.module.css'
import likeAva from './like-icon.png'

const ReleasedPost = props => {
    return (
        <div className={classes.releasedPost}>
            <img className={classes.releasedPost__ava} src={props.ava} alt="avatar" />
            <h3 className={classes.releasedPost__title}>Post {props.number}</h3>
            <div className={classes.releasedPost__message}>{props.message}</div>
            <div className={classes.releasedPost__likesBox}>
                <a className={classes.releasedPost__likeAnchor} href="#"><img className={classes.releasedPost__likeImg} src={likeAva} alt="Like" /></a>
                <div className={classes.releasedPost__numberOfLikes}>{props.numberOfLikes} likes</div>
            </div>
        </div>
    )
}

export default ReleasedPost