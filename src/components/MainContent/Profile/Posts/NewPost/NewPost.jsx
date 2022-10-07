import React from "react"
import classes from './newPost.module.css'

const NewPost = ({placeholder, addPost}) => {
    const newPost = React.createRef()
    const addNewPost = () => {
        const text = newPost.current.value
        newPost.current.value = ""
        addPost(text)
    }
    return (
        <div className={classes.newPost}>
            <textarea className={classes.newPost__textarea} placeholder={placeholder} ref={newPost}>
            </textarea>
                <button onClick={addNewPost} className={classes.newPost__submitButton}>Send</button>
        </div>
    )
}

export default NewPost