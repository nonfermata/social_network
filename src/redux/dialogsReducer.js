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

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            const newMessage = {
                id: Date.now(),
                type: 'outgoing',
                time: action.time,
                text: action.text
            }
            state.forEach(person => {
                if (person.id === action.friendId) {
                    person.messages.push(newMessage)
                }
            })
            break
        case "DELETE_MESSAGE":
            state.forEach(person => {
                if (person.id === action.friendId) {
                    person.messages = person.messages.filter(message => message.id !== action.messageId)
                }
            })
            break
    }
    return state
}

export default dialogsReducer