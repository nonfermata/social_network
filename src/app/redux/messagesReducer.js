import httpService from "../services/http.service";

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
    let newState, newMessage;
    switch (action.type) {
        case addMsg:
            newState = [...state];
            newMessage = {
                _id: String(Date.now()),
                content: action.content,
                created_at: Date.now(),
                type: "outgoing",
                userId: action.userId
            };
            newState.push(newMessage);
            addMsgToDB(newMessage);
            return newState;
        case deleteMsg:
            deleteMsgFromDB(action.messageId);
            return state.filter((message) => message._id !== action.messageId);
        case setMessages:
            return [...action.messages];
        default:
            return state;
    }
};

function addMsgToDB(message) {
    httpService.put("messages/" + message._id, message);
}

function deleteMsgFromDB(id) {
    httpService.delete("messages/" + id);
}

export default messagesReducer;
