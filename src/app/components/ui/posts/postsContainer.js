import { connect } from "react-redux";
import { getAddPostAction } from "../../../redux/postsReducer";
import Posts from "./posts";

const mapStateToProps = (state) => ({
    posts: state.posts,
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    addPost: (newPost) => {
        dispatch(getAddPostAction(newPost));
    }
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
