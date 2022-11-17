import moment from "moment";

const initialState = [
    {
        _id: "287072122277",
        userId: "9253678001",
        created_at: "Feb 20, 1979 22:05:11",
        content: `Hi!`,
        type: "outgoing"
    },
    {
        _id: "287072122278",
        userId: "9253678001",
        created_at: "Feb 20, 1979 22:05:43",
        content: `Haven't seen for a long time!`,
        type: "outgoing"
    },
    {
        _id: "287072122279",
        userId: "9253678001",
        created_at: "Feb 20, 1979 22:07:00",
        content: `Did yu know that your last song is absolutely great`,
        type: "outgoing"
    },
    {
        _id: "287072122300",
        userId: "9253678001",
        created_at: "Feb 21, 1979 09:09:32",
        content: `Hi, thank you. But what song do you mean?)`,
        type: "incoming"
    },
    {
        _id: "287072122281",
        userId: "9253678001",
        created_at: "Feb 21, 1979 09:10:22",
        content: `I mean 'Imagine'.`,
        type: "outgoing"
    },
    {
        _id: "287072122282",
        userId: "9253678001",
        created_at: "Feb 21, 1979 09:12:22",
        content: `Oh, they said me. And I don't know what to say. Maybe time will say `,
        type: "incoming"
    },
    {
        _id: "287072122283",
        userId: "9253678002",
        created_at: "May 17, 2019 12:05:00",
        content: `Hi, how are you?`,
        type: "incoming"
    },
    {
        _id: "287072122284",
        userId: "9253678002",
        created_at: "May 17, 2019 12:05:23",
        content: `I'm fine! And you?`,
        type: "outgoing"
    },
    {
        _id: "287072122285",
        userId: "9253678002",
        created_at: "May 17, 2019 12:07:03",
        content: `I'm ok. I've got to say that I like your music!`,
        type: "incoming"
    },
    {
        _id: "287072122286",
        userId: "9253678002",
        created_at: "May 17, 2019 12:08:49",
        content: `Oh, thank you very much! It's very important for me.`,
        type: "outgoing"
    },
    {
        _id: "287072122287",
        userId: "9253678002",
        created_at: "May 18, 2019 19:11:33",
        content: `Lets compose something together!`,
        type: "incoming"
    },
    {
        _id: "287072122288",
        userId: "9253678002",
        created_at: "May 18, 2019 19:13:17",
        content: `That is a good idea `,
        type: "outgoing"
    },
    {
        _id: "287072122289",
        userId: "9253678003",
        created_at: "Aug 10, 1999 23:05:08",
        content: `Hello!`,
        type: "outgoing"
    },
    {
        _id: "287072122300",
        userId: "9253678003",
        created_at: "Aug 11, 1999 14:11:20",
        content: `Hi!`,
        type: "incoming"
    },
    {
        _id: "287072122291",
        userId: "9253678003",
        created_at: "Aug 11, 1999 14:12:38",
        content: `Where have you been for so long time?`,
        type: "incoming"
    },
    {
        _id: "287072122292",
        userId: "9253678003",
        created_at: "Aug 11, 1999 14:14:06",
        content: `I've been in India.`,
        type: "outgoing"
    },
    {
        _id: "287072122293",
        userId: "9253678003",
        created_at: "Aug 11, 1999 14:15:18",
        content: `And how is India? )`,
        type: "incoming"
    },
    {
        _id: "287072122294",
        userId: "9253678003",
        created_at: "Aug 11, 1999 14:18:32",
        content: `Fantastic! But you better see it yourself.`,
        type: "outgoing"
    },
    {
        _id: "287072122295",
        userId: "9253678003",
        created_at: "Aug 11, 1999 14:20:35",
        content: `Ok. I can even catch the last plane today to Delhi )`,
        type: "incoming"
    },
    {
        _id: "287072122296",
        userId: "9253678004",
        created_at: "Jun 1, 2022 23:23:00",
        content: `Hi, I've got a question.`,
        type: "incoming"
    },
    {
        _id: "287072122297",
        userId: "9253678004",
        created_at: "Jun 1, 2022 23:23:13",
        content: `What is your favourite color?`,
        type: "incoming"
    },
    {
        _id: "287072122298",
        userId: "9253678004",
        created_at: "Jun 1, 2022 23:34:07",
        content: `Hi! Mmm... Orange. But... why?`,
        type: "outgoing"
    },
    {
        _id: "287072122299",
        userId: "9253678004",
        created_at: "Jun 1, 2022 23:45:43",
        content: `I choose a car for you on your birthday :)`,
        type: "incoming"
    },
    {
        _id: "287072122300",
        userId: "9253678004",
        created_at: "Jun 2, 2022 00:13:25",
        content: `WHAT?!!!!`,
        type: "outgoing"
    },
    {
        _id: "287072122301",
        userId: "9253678005",
        created_at: "Jul 3, 2014 14:05:08",
        content: `Hi! Where are you now?`,
        type: "outgoing"
    },
    {
        _id: "287072122302",
        userId: "9253678005",
        created_at: "Jul 3, 2014 14:05:30",
        content: `Hi, I'm home. Something happened?`,
        type: "incoming"
    },
    {
        _id: "287072122303",
        userId: "9253678005",
        created_at: "Jul 3, 2014 14:07:19",
        content: `Nothing serious. Just something is wrong with my phone. Can you call me now please?`,
        type: "outgoing"
    },
    {
        _id: "287072122304",
        userId: "9253678005",
        created_at: "Jul 3, 2014 14:08:23",
        content: `Little bit later. In several minutes, ok?`,
        type: "incoming"
    },
    {
        _id: "287072122305",
        userId: "9253678005",
        created_at: "Jul 3, 2014 14:18:25",
        content: `Well, I'm calling. But you are not available. Try to reload your phone. Sometimes it helps.`,
        type: "incoming"
    },
    {
        _id: "287072122306",
        userId: "9253678005",
        created_at: "Jul 3, 2014 14:20:19",
        content: `Ok, thanks!`,
        type: "outgoing"
    },
    {
        _id: "287072122307",
        userId: "9253678006",
        created_at: "Jul 2, 2022 12:05:32",
        content: `Hi, bro! Could you give me your auto for a day please?`,
        type: "outgoing"
    },
    {
        _id: "287072122308",
        userId: "9253678006",
        created_at: "Jul 2, 2022 12:08:11",
        content: `I need to take out my family from Paris.`,
        type: "outgoing"
    },
    {
        _id: "287072122309",
        userId: "9253678006",
        created_at: "Jul 2, 2022 12:12:00",
        content: `Hi! Yes, sure!`,
        type: "incoming"
    },
    {
        _id: "287072122310",
        userId: "9253678006",
        created_at: "Jul 2, 2022 12:14:39",
        content: `Call me when you can.`,
        type: "incoming"
    },
    {
        _id: "287072122311",
        userId: "9253678006",
        created_at: "Jul 2, 2022 12:16:02",
        content: `Thank you so much! I've been always sure that I can count on you! )`,
        type: "outgoing"
    },
    {
        _id: "287072122312",
        userId: "9253678007",
        created_at: "Nov 11, 2018 23:24:18",
        content: `Hi, how is life?`,
        type: "incoming"
    },
    {
        _id: "287072122313",
        userId: "9253678007",
        created_at: "Nov 11, 2018 23:25:23",
        content: `Hi! I'm fine!`,
        type: "outgoing"
    },
    {
        _id: "287072122314",
        userId: "9253678007",
        created_at: "Nov 11, 2018 23:46:39",
        content: `I've bought a new guitar!`,
        type: "outgoing"
    },
    {
        _id: "287072122315",
        userId: "9253678007",
        created_at: "Nov 12, 2018 00:12:52",
        content: `That's great! Are you happy? )`,
        type: "incoming"
    },
    {
        _id: "287072122316",
        userId: "9253678007",
        created_at: "Nov 12, 2018 00:13:28",
        content: `Oh, year! I've been thinking about it for years. And now I'm really happy!`,
        type: "outgoing"
    },
    {
        _id: "287072122317",
        userId: "9253678007",
        created_at: "Nov 12, 2018 00:15:03",
        content: `So come on! Conquer the whole world with your music!`,
        type: "incoming"
    },
    {
        _id: "287072122318",
        userId: "9253678008",
        created_at: "Jul 25, 1984 22:14:18",
        content: `Take on me!`,
        type: "incoming"
    },
    {
        _id: "287072122319",
        userId: "9253678008",
        created_at: "Jul 25, 1984 23:20:23",
        content: `Excuse me... What are you about?`,
        type: "outgoing"
    },
    {
        _id: "287072122320",
        userId: "9253678008",
        created_at: "Jul 26, 1984 00:15:52",
        content: `Take me on!`,
        type: "incoming"
    },
    {
        _id: "287072122321",
        userId: "9253678008",
        created_at: "Jul 26, 1984 00:23:28",
        content: `Are you nuts, guy?`,
        type: "outgoing"
    },
    {
        _id: "287072122322",
        userId: "9253678008",
        created_at: "Jul 27, 1984 09:45:03",
        content: `I'll be gone`,
        type: "incoming"
    },
    {
        _id: "287072122323",
        userId: "9253678008",
        created_at: "Jul 27, 1984 09:47:03",
        content: `in a day or two.`,
        type: "incoming"
    },
    {
        _id: "287072122324",
        userId: "9253678008",
        created_at: "Jul 27, 1984 10:00:28",
        content: `WTF! What's wrong with you, boy?!`,
        type: "outgoing"
    },
    {
        _id: "287072122325",
        userId: "9253678008",
        created_at: "Jul 27, 1984 10:07:03",
        content: `You don't understand. I'm absolutely happy! That's gonna be the greatest hit ever!`,
        type: "incoming"
    }
];

const addMessage = "ADD_MESSAGE";
const deleteMessage = "DELETE_MESSAGE";

export const getAddMessageAction = (newMessage) => ({
    type: addMessage,
    content: newMessage.content,
    userId: newMessage.userId
});
export const getDeleteMessageAction = (messageId) => ({
    type: deleteMessage,
    messageId
});

const messagesReducer = (state = initialState, action) => {
    const newState = state.map((item) => ({ ...item }));
    switch (action.type) {
        case addMessage:
            newState.push({
                _id: String(Date.now()),
                userId: action.userId,
                created_at: moment().format("MMM D, YYYY HH:mm:ss"),
                content: action.content,
                type: "outgoing"
            });
            return newState;
        case deleteMessage:
            return state.filter((message) => message._id !== action.messageId);
        default:
            return state;
    }
};

export default messagesReducer;
