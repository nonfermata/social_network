import React from "react"
import classes from './NewPost.module.css'

const NewPost = props => {
    return (
        <form className={classes.newPost} action={props.action} method="post">
            <textarea className={classes.newPost__textarea} placeholder={props.placeholder} name={props.name}>
            </textarea>
            <input className={classes.newPost__submitButton} type="submit" value="Send"/>
        </form>
    )
}

export default NewPost