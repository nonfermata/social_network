const setUsersToStore = "SET_USERS_TO_STORE";
const followChange = "FOLLOW_CHANGE";

export const followChangeAC = (userId) => ({
    type: followChange,
    userId
});

export const setUsersToStoreAC = (users) => ({
    type: setUsersToStore,
    users
});

const usersReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case followChange:
            newState = state.map((object) => {
                if (object._id === action.userId) {
                    return {
                        ...object,
                        followed: !object.followed
                    };
                } else return { ...object };
            });
            return newState;
        case setUsersToStore:
            return [...action.users];
        default:
            return state;
    }
};

export default usersReducer;
