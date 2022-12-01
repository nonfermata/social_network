const setUsers = "SET_USERS_TO_STORE";
const followCng = "FOLLOW_CHANGE";

export const followChange = (userId) => ({
    type: followCng,
    userId
});

export const setUsersToStore = (users) => ({
    type: setUsers,
    users
});

const usersReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case followCng:
            newState = state.map((object) => {
                if (object._id === action.userId) {
                    return {
                        ...object,
                        followed: !object.followed
                    };
                } else return { ...object };
            });
            return newState;
        case setUsers:
            return [...action.users];
        default:
            return state;
    }
};

export default usersReducer;
