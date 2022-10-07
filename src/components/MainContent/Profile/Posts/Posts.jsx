import React, {useState} from 'react'
import ReleasedPost from './releasedPost/releasedPost'
import classes from './posts.module.css'
import NewPost from "./newPost/newPost";

const Posts = ({posts}) => {
    const [finalPosts, setFinalPosts] = useState(posts)

    const addPost = (text) => {
        const newPost = {
            id: finalPosts[0].id + 1,
            postNumber: finalPosts[0].postNumber + 1,
            avatarURL: 'https://www.thesun.co.uk/wp-content/uploads/2019/02/Comp31.jpg',
            postText: text,
            numberOfLikes: 0
        }
        const newArr = finalPosts
        newArr.unshift(newPost)
        setFinalPosts(newArr)
    }

    const postsHTML = finalPosts.map(item => (
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
            <NewPost placeholder="write your new post here..." addPost={addPost}/>
            {postsHTML}
        </div>
    )
}

export default Posts