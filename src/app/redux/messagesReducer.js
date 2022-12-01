const setMessages = "SET_MESSAGES_TO_STORE";
const addMsg = "ADD_MESSAGE";
const deleteMsg = "DELETE_MESSAGE";

export const setMessagesToStore = (messages) => ({
    type: setMessages,
    messages
});

export const addMessage = (newMessage) => ({
    type: addMsg,
    content: newMessage.content,
    userId: newMessage.userId
});
export const deleteMessage = (messageId) => ({
    type: deleteMsg,
    messageId
});

const messagesReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case addMsg:
            newState = [...state];
            newState.push({
                _id: String(Date.now()),
                content: action.content,
                created_at: Date.now(),
                type: "outgoing",
                userId: action.userId
            });
            return newState;
        case deleteMsg:
            return state.filter((message) => message._id !== action.messageId);
        case setMessages:
            return [...action.messages];
        default:
            return state;
    }
};

export default messagesReducer;
