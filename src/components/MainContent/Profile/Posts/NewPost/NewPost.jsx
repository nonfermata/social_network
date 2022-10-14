import React, {useState} from "react"
import classes from './newPost.module.css'
import {addPostAction} from "../../../../../redux/postsReducer";

const NewPost = ({addPost, placeholder}) => {
    const [newPostText, setNewPostText] = useState("")
    const newPost = React.createRef()
    const startNewPost = () => {
        if (newPostText.trim()) {
            addPost(addPostAction(newPostText))
        }
            setNewPostText("")
    }
    const onTextPostChange = () => {
        setNewPostText(newPost.current.value)
    }
    return (
        <div className={classes.newPost}>
            <textarea
                className={classes.newPostTextarea}
                onChange={onTextPostChange}
                ref={newPost}
                placeholder={placeholder}
                value={newPostText}
            />
            <button
                className={classes.newPostSubmitButton}
                onClick={startNewPost}
            >
                Add post
            </button>
            <div className={classes.fakeDiv}>{newPostText}</div>
        </div>
    )
}

export default NewPost