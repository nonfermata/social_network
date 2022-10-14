const dialogsReducer = (state, action) => {
    if (action.type === "ADD_MESSAGE") {
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
    } else if (action.type === "DELETE_MESSAGE") {
        state.forEach(person => {
            if (person.id === action.friendId) {
                person.messages = person.messages.filter(message => message.id !== action.messageId)
            }
        })
    }
    return state
}

export default dialogsReducer