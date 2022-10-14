export const addPostAction = (text) => (
    {
        type: "ADD-POST",
        text
    }
)

export const addMessageAction = (text, time, friendId) => (
    {
        type: "ADD_MESSAGE",
        text,
        time,
        friendId
    }
)
export const deleteMessageAction = (messageId, friendId) => (
    {
        type: "DELETE_MESSAGE",
        messageId,
        friendId
    }
)