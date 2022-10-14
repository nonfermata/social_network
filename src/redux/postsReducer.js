import profileAvatarURL from "../assets/profile-avatar.png";

const postsReducer = (state, action) => {
    if (action.type === "ADD-POST") {
        const newPost = {
            id: state[0].id + 1,
            postNumber: state[0].postNumber + 1,
            avatarURL: profileAvatarURL,
            postText: action.text,
            numberOfLikes: 0
        }
        state.unshift(newPost);
    }
    return state
}

export default postsReducer