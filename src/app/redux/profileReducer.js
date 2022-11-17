import profileAvatarURL from "../assets/profile-avatar.png";

const initialState = {
    _id: "9253678000",
    avatarURL: profileAvatarURL,
    name: "Dmitry Baulin",
    dateOfBirth: "10.09.1975",
    city: "Moscow",
    website: "https://febrecords.ru",
    phone: "+7 123 4567890"
};

const profileReducer = (state = initialState) => {
    return state;
};

export default profileReducer;
