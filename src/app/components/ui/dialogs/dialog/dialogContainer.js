import { connect } from "react-redux";
import {
    getAddMessageAction,
    getDeleteMessageAction
} from "../../../../redux/messagesReducer";
import Dialog from "./dialog";

const mapStateToProps = (state) => ({
    messages: state.messages,
    profileAvatarURL: state.profile.avatarURL
});

const mapDispatchToProps = (dispatch) => ({
    addMessage: (newMessage) => {
        dispatch(getAddMessageAction(newMessage));
    },
    deleteMessage: (messageId) => {
        dispatch(getDeleteMessageAction(messageId));
    }
});

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
