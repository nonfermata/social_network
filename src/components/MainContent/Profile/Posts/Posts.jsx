import React from 'react'
import ReleasedPost from './releasedPost/releasedPost'
import classes from './posts.module.css'
import NewPost from "./newPost/newPost";
import { postsData } from "../../../../data/postsData";

const postsItems = postsData.map(el => {
    return <ReleasedPost
        id={el.id}
        avaURL={el.avaURL}
        postText={el.postText}
        numberOfLikes={el.numberOfLikes}
    />
})

const Posts = () => {
    return (
        <div className={classes.posts}>
            <h2 className={classes.postsTitle}>My posts</h2>
            <NewPost placeholder="write your new post here..." name="new-post" action="#" />

            {postsItems}

        </div>
    )
}

export default Posts