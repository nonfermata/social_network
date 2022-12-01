const addNewPost = "ADD_POST";
const setPosts = "SEND_POSTS_TO_STORE";

export const setPostsToStore = (posts) => ({
    type: setPosts,
    posts
});

export const addPost = (newPost) => ({
    type: addNewPost,
    authorId: newPost.authorId,
    title: newPost.title,
    content: newPost.content
});

const postsReducer = (state = [], action) => {
    const newState = state.map((object) => ({ ...object }));
    switch (action.type) {
        case addNewPost:
            newState.push({
                _id: String(Date.now()),
                created_at: String(Date.now()),
                title: action.title,
                authorId: action.authorId,
                content: action.content,
                likes: 0
            });
            return newState;
        case setPosts:
            return [...action.posts];
        default:
            return newState;
    }
};

export default postsReducer;
