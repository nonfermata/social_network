const setProfileToStore = "SET_PROFILE_TO_STORE";

export const setProfileToStoreAC = (profile) => ({
    type: setProfileToStore,
    profile
});

const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case setProfileToStore:
            return { ...action.profile };
        default:
            return state;
    }
};

export default profileReducer;
