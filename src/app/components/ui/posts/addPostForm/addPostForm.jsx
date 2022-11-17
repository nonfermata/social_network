import React, { useState } from "react";
import classes from "./addPostForm.module.css";
import PropTypes from "prop-types";
import SelectField from "../../../common/form/selectField";
import TextField from "../../../common/form/textField";
import TextareaField from "../../../common/form/textareaField";

const AddPostForm = ({ users, addPost }) => {
    const newPostInitialState = {
        authorId: "",
        title: "",
        content: ""
    };
    const [newPost, setNewPost] = useState(newPostInitialState);

    const onAddPost = (event) => {
        event.preventDefault();
        if (newPost.authorId && newPost.title && newPost.content) {
            addPost(newPost);
            setNewPost(newPostInitialState);
        }
    };

    const handleChange = ({ target }) => {
        setNewPost((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <form className={classes.addPostForm} onSubmit={onAddPost}>
            <SelectField
                name="authorId"
                value={newPost.authorId}
                onChange={handleChange}
                options={users}
                defaultOption="Кто хочет написать новый пост?"
            />
            <TextField
                name="title"
                value={newPost.title}
                onChange={handleChange}
                placeholder="Введите заголовок"
            />
            <TextareaField
                name="content"
                value={newPost.content}
                onChange={handleChange}
                placeholder="напишите свой пост здесь..."
            />
            <button className={classes.newPostSubmitButton}>Add post</button>
        </form>
    );
};
AddPostForm.propTypes = {
    addPost: PropTypes.func,
    users: PropTypes.arrayOf(PropTypes.object)
};

export default AddPostForm;
