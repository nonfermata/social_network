import React from 'react'
import ReleasedPost from './ReleasedPost/ReleasedPost'
import classes from './Posts.module.css'
import NewPost from "./NewPost/NewPost";

const Posts = () => {
    return (
        <div className={classes.posts}>
            <h2 className={classes.postsTitle}>My posts</h2>
            <NewPost placeholder="write your new post here..." name="new-post" action="#" />
            <ReleasedPost numberOfLikes="20" number='1' ava='https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg' message='Amen lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto!' />
            <ReleasedPost numberOfLikes="13" number='2' ava='https://pbs.twimg.com/media/ES1asUFWkAE1PLw.jpg' message='Bit amet consectetur adipisicing elit, aliquid similique nulla perferendis ullam dolorum ab. Quos adipisci alias dolor maxime id, assumenda aperiam, quibusdam saepe, modi iusto aspernatur fugiat tempore officia repellendus? Quasi commodi maiores minus tenetur suscipit delectus, nisi in soluta. Harum recusandae atque voluptas exercitationem ex odio dolor voluptatibus perferendis quisquam tenetur velit molestias voluptatem totam, laboriosam amet ad quae a nihil nemo dicta? Eius, voluptates molestias fugiat obcaecati omnis perferendis animi nobis voluptatem vitae necessitatibus quas modi quo libero culpa laboriosam possimus consequuntur facere deserunt repudiandae consectetur. Quaerat esse illum nemo sint, minima placeat reiciendis totam incidunt sunt?' />
            <ReleasedPost numberOfLikes="24" number='3' ava='https://www.thesun.co.uk/wp-content/uploads/2019/02/Comp31.jpg' message='Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto!' />
            <ReleasedPost numberOfLikes="8" number='4' ava='https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg' message='Dolor sit amet consectetur adipisicing elit. Id inventore quasi cum at fugiat magni laboriosam exercitationem eum quo ipsa non sint molestias numquam, obcaecati dignissimos corporis. Minima, cumque blanditiis nulla provident ducimus magnam, quisquam tempora architecto esse mollitia aperiam consequatur explicabo itaque sequi quos quae a veritatis pariatur facilis voluptatem iste exercitationem id est! Rerum deleniti tenetur, eveniet autem hic ipsa adipisci pariatur magni ipsam neque. Explicabo adipisci blanditiis deserunt asperiores, exercitationem eligendi quisquam obcaecati iusto.' />
        </div>
    )
}

export default Posts