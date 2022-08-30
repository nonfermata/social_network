import React from 'react'
import classes from './Posts.module.css'

const Posts = () => {
    return (
        <div className={classes.posts}>
            <h2>My posts</h2>
            <form className={classes.newPostWrap} action="#" method="post">
                <textarea className={classes.newPost} placeholder="write your new post here..." name="newPost" >

                </textarea>
                <button className={classes.sendButton}>Send</button>
                {/* <input className="sendButton" type={'submit'}>Send</input>  */}
            </form>
            <div className={classes.releasedPost}>
                <h3>Post 1</h3>
                Amen lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto!
            </div>
            <div className={classes.releasedPost}>
                <h3>Post 2</h3>
                Bit amet consectetur adipisicing elit, aliquid similique nulla perferendis ullam dolorum ab. Quos adipisci alias dolor maxime id, assumenda aperiam, quibusdam saepe, modi iusto aspernatur fugiat tempore officia repellendus? Quasi commodi maiores minus tenetur suscipit delectus, nisi in soluta. Harum recusandae atque voluptas exercitationem ex odio dolor voluptatibus perferendis quisquam tenetur velit molestias voluptatem totam, laboriosam amet ad quae a nihil nemo dicta? Eius, voluptates molestias fugiat obcaecati omnis perferendis animi nobis voluptatem vitae necessitatibus quas modi quo libero culpa laboriosam possimus consequuntur facere deserunt repudiandae consectetur. Quaerat esse illum nemo sint, minima placeat reiciendis totam incidunt sunt?
            </div>
            <div className={classes.releasedPost}>
                <h3>Post 3</h3>
                Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto!
            </div>
            <div className={classes.releasedPost}>
                <h3>Post 4</h3>
                Dolor sit amet consectetur adipisicing elit. Id inventore quasi cum at fugiat magni laboriosam exercitationem eum quo ipsa non sint molestias numquam, obcaecati dignissimos corporis. Minima, cumque blanditiis nulla provident ducimus magnam, quisquam tempora architecto esse mollitia aperiam consequatur explicabo itaque sequi quos quae a veritatis pariatur facilis voluptatem iste exercitationem id est! Rerum deleniti tenetur, eveniet autem hic ipsa adipisci pariatur magni ipsam neque. Explicabo adipisci blanditiis deserunt asperiores, exercitationem eligendi quisquam obcaecati iusto.
            </div>
        </div>
    )
}

export default Posts