import avatar from "../assets/avatar.png";

export const state = {
    profile: {
        avatarURL: avatar,
        name: "Dmitry Baulin",
        dateOfBirth: "10.09.1975",
        city: "Moscow",
        website: "https://febrecords.ru",
        phone: "+7 123 4567890"
    },
    menu: [
        {id: "92675180301", name: "profile"},
        {id: "92675180302", name: "dialogs"},
        {id: "92675180303", name: "news"},
        {id: "92675180304", name: "music"},
        {id: "92675180305", name: "settings"}
    ]
}