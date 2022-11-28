import moment from "moment";

const setMessagesToStore = "SET_MESSAGES_TO_STORE";
const addMessage = "ADD_MESSAGE";
const deleteMessage = "DELETE_MESSAGE";

export const setMessagesToStoreAC = (messages) => ({
    type: setMessagesToStore,
    messages
});

export const addMessageAC = (newMessage) => ({
    type: addMessage,
    content: newMessage.content,
    userId: newMessage.userId
});
export const deleteMessageAC = (messageId) => ({
    type: deleteMessage,
    messageId
});

const messagesReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case addMessage:
            newState = state.map((item) => item);
            newState.push({
                _id: String(Date.now()),
                userId: action.userId,
                created_at: moment().format("MMM D, YYYY HH:mm:ss"),
                content: action.content,
                type: "outgoing"
            });
            return newState;
        case deleteMessage:
            return state.filter((message) => message._id !== action.messageId);
        case setMessagesToStore:
            return [...action.messages];
        default:
            return state;
    }
};

export default messagesReducer;
