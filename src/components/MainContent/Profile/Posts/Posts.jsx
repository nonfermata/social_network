import React from 'react'
import ReleasedPost from './releasedPost/releasedPost'
import classes from './posts.module.css'
import NewPost from "./newPost/newPost";

const Posts = ({posts}) => {
    const postsHTML = posts.map(item => (
        <ReleasedPost
            key={item.id}
            id={item.id}
            postNumber={item.postNumber}
            avatarURL={item.avatarURL}
            postText={item.postText}
            numberOfLikes={item.numberOfLikes}
        />
    ))
    return (
        <div className={classes.posts}>
            <h2 className={classes.postsTitle}>My posts</h2>
            <NewPost placeholder="write your new post here..."/>
            {postsHTML}
        </div>
    )
}

export default Posts