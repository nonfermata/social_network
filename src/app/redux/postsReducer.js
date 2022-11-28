const addPost = "ADD_POST";
const setPostsToStore = "SEND_POSTS_TO_STORE";

export const setPostsToStoreAC = (posts) => ({
    type: setPostsToStore,
    posts
});

export const addPostAC = (newPost) => ({
    type: addPost,
    authorId: newPost.authorId,
    title: newPost.title,
    content: newPost.content
});

const postsReducer = (state = [], action) => {
    const newState = state.map((object) => ({ ...object }));
    switch (action.type) {
        case addPost:
            newState.push({
                _id: String(Date.now()),
                created_at: String(Date.now()),
                title: action.title,
                authorId: action.authorId,
                content: action.content,
                likes: 0
            });
            return newState;
        case setPostsToStore:
            return [...action.posts];
        default:
            return newState;
    }
};

export default postsReducer;
