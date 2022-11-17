import { connect } from "react-redux";
import {
    addMessageAction,
    deleteMessageAction
} from "../../../../redux/messagesReducer";
import Dialog from "./dialog";

const mapStateToProps = (state) => ({
    messages: state.messages,
    profileAvatarURL: state.profile.avatarURL
});

const mapDispatchToProps = (dispatch) => ({
    addMessage: (newMessage) => {
        dispatch(addMessageAction(newMessage));
    },
    deleteMessage: (messageId) => {
        dispatch(deleteMessageAction(messageId));
    }
});

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
