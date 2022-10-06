import React from 'react'
import ReleasedPost from './releasedPost/releasedPost'
import classes from './posts.module.css'
import NewPost from "./newPost/newPost";
import {posts} from "../../../../data/posts";

const Posts = () => {
    return (
        <div className={classes.posts}>
            <h2 className={classes.postsTitle}>My posts</h2>
            <NewPost placeholder="write your new post here..." name="new-post" action="#"/>
            {posts.map(item => (
                <ReleasedPost
                    key={item.id}
                    id={item.id}
                    postNumber={item.postNumber}
                    avatarURL={item.avatarURL}
                    postText={item.postText}
                    numberOfLikes={item.numberOfLikes}
                />
            ))}
        </div>
    )
}

export default Posts