const initialState = [
    {
        _id: "9253678001",
        name: "John",
        avatarURL:
            "https://i.discogs.com/1mToqrGaGlnG_mO_58LgFdpFEvb60e2bYFMrZzeUu7g/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ2NDgx/LTEyODY2MjY2MDEu/anBlZw.jpeg",
        status: "Give peace a chance!",
        location: { city: "London", country: "England" },
        followed: true
    },
    {
        _id: "9253678002",
        name: "Paul",
        avatarURL:
            "https://lefthanderslegacy.org/wp-content/uploads/2018/07/Paul-McCartney.jpg",
        status: "Oh, I believe in yesterday",
        location: { city: "Amsterdam", country: "Netherlands" },
        followed: true
    },
    {
        _id: "9253678003",
        name: "George",
        avatarURL: "https://iscale.iheart.com/catalog/artist/29143",
        status: "Here comes the sun )",
        location: { city: "Glasgow", country: "Scotland" },
        followed: false
    },
    {
        _id: "9253678004",
        name: "Ringo",
        avatarURL:
            "https://d2kdkfqxnvpuu9.cloudfront.net/images/big/74628.jpg?1475075592",
        status: "We all live in a yellow submarine",
        location: { city: "Paris", country: "France" },
        followed: true
    },
    {
        _id: "9253678005",
        name: "Dolores",
        avatarURL:
            "https://i.pinimg.com/736x/ff/8f/85/ff8f85ec7c67bc20836854e6c1143e49.jpg",
        status: `Zombie, what's in your head?`,
        location: { city: "Dublin", country: "Ireland" },
        followed: false
    },
    {
        _id: "9253678006",
        name: "Sting",
        avatarURL:
            "https://i.discogs.com/0SNA0qJGLPxqLjNlPYtFQ06TpithNK3jLUZaP98tpXE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4Njk4/MC0xMTczMzg3OTg4/LmpwZWc.jpeg",
        status: "I'm an Englishman in New York",
        location: { city: "London", country: "England" },
        followed: true
    },
    {
        _id: "9253678007",
        name: "Suzanne",
        avatarURL: "https://secondhandsongs.com/picture/175050",
        status: "My name is Luka )",
        location: { city: "New York", country: "USA" },
        followed: true
    },
    {
        _id: "9253678008",
        name: "Morten",
        avatarURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkkgryB7GlwVAbkA4rmnzt9GTr52r_N0_2A&usqp=CAU",
        status: "Take on me!",
        location: { city: "Oslo", country: "Norway" },
        followed: false
    }
];

const followUser = "FOLLOW_USER";
const unfollowUser = "UNFOLLOW_USER";

export const getFollowUserAction = (userId) => ({
    type: followUser,
    userId
});

export const getUnfollowUserAction = (userId) => ({
    type: unfollowUser,
    userId
});

const usersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case followUser:
            newState = state.map((object) => {
                if (object._id === action.userId) {
                    return {
                        ...object,
                        followed: true
                    };
                } else return { ...object };
            });
            return newState;
        case unfollowUser:
            newState = state.map((object) => {
                if (object._id === action.userId) {
                    return {
                        ...object,
                        followed: false
                    };
                } else return { ...object };
            });
            return newState;
        default:
            return state;
    }
};

export default usersReducer;
