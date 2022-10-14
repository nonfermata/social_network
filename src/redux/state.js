import profileAvatarURL from "../assets/profile-avatar.png";
import postsReducer from "./postsReducer";
import dialogsReducer from "./dialogsReducer";
import profileAvatar from "../assets/profile-avatar.png";

const state = {
    _menu: [
        {id: "92675180301", name: "profile"},
        {id: "92675180302", name: "dialogs"},
        {id: "92675180303", name: "news"},
        {id: "92675180304", name: "music"},
        {id: "92675180305", name: "settings"}
    ],
    _profile: {
        avatarURL: profileAvatar,
        name: "Dmitry Baulin",
        dateOfBirth: "10.09.1975",
        city: "Moscow",
        website: "https://febrecords.ru",
        phone: "+7 123 4567890"
    },
    _posts: [
        {
            id: 785643904,
            postNumber: 4,
            avatarURL: 'https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg',
            postText: 'Dolor sit amet consectetur adipisicing elit. Id inventore quasi cum at fugiat magni laboriosam exercitationem eum quo ipsa non sint molestias numquam, obcaecati dignissimos corporis. Minima, cumque blanditiis nulla provident ducimus magnam, quisquam tempora architecto esse mollitia aperiam consequatur explicabo itaque sequi quos quae a veritatis pariatur facilis voluptatem iste exercitationem id est! Rerum deleniti tenetur, eveniet autem hic ipsa adipisci pariatur magni ipsam neque. Explicabo adipisci blanditiis deserunt asperiores, exercitationem eligendi quisquam obcaecati iusto.',
            numberOfLikes: 17,
        },
        {
            id: 785643902,
            postNumber: 3,
            avatarURL: 'https://pbs.twimg.com/media/ES1asUFWkAE1PLw.jpg',
            postText: 'Bit amet consectetur adipisicing elit, aliquid similique nulla perferendis ullam dolorum ab. Quos adipisci alias dolor maxime id, assumenda aperiam, quibusdam saepe, modi iusto aspernatur fugiat tempore officia repellendus? Quasi commodi maiores minus tenetur suscipit delectus, nisi in soluta. Harum recusandae atque voluptas exercitationem ex odio dolor voluptatibus perferendis quisquam tenetur velit molestias voluptatem totam, laboriosam amet ad quae a nihil nemo dicta? Eius, voluptates molestias fugiat obcaecati omnis perferendis animi nobis voluptatem vitae necessitatibus quas modi quo libero culpa laboriosam possimus consequuntur facere deserunt repudiandae consectetur. Quaerat esse illum nemo sint, minima placeat reiciendis totam incidunt sunt?',
            numberOfLikes: 12,
        },
        {
            id: 785643903,
            postNumber: 2,
            avatarURL: 'https://www.thesun.co.uk/wp-content/uploads/2019/02/Comp31.jpg',
            postText: 'Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto!',
            numberOfLikes: 25,
        },
        {
            id: 785643901,
            postNumber: 1,
            avatarURL: 'https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg',
            postText: 'Amen lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto!',
            numberOfLikes: '22',
        }
    ],
    _dialogs: [
        {
            id: 9253678001,
            name: 'John',
            avatarURL: 'https://i.discogs.com/1mToqrGaGlnG_mO_58LgFdpFEvb60e2bYFMrZzeUu7g/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ2NDgx/LTEyODY2MjY2MDEu/anBlZw.jpeg',
            messages: [
                {
                    id: 287072122277,
                    type: 'outgoing',
                    time: 'Feb 20, 1979 22:05:11',
                    text: `Hi!`
                },
                {
                    id: 287072122278,
                    type: 'outgoing',
                    time: 'Feb 20, 1979 22:05:43',
                    text: `Haven't seen for a long time!`
                },
                {
                    id: 287072122279,
                    type: 'outgoing',
                    time: 'Feb 20, 1979 22:07:00',
                    text: `Did yu know that your last song is absolutely great`
                },
                {
                    id: 287072122300,
                    type: 'incoming',
                    time: 'Feb 21, 1979 09:09:32',
                    text: `Hi, thank you. But what song do you mean?)`
                },
                {
                    id: 287072122281,
                    type: 'outgoing',
                    time: 'Feb 21, 1979 09:10:22',
                    text: `I mean 'Imagine'.`
                },
                {
                    id: 287072122282,
                    type: 'incoming',
                    time: 'Feb 21, 1979 09:12:22',
                    text: `Oh, they said me. And I don't know what to say. Maybe time will say `
                },
            ],
        },
        {
            id: 9253678002,
            name: 'Paul',
            avatarURL: 'https://lefthanderslegacy.org/wp-content/uploads/2018/07/Paul-McCartney.jpg',
            messages: [
                {
                    id: 287072122283,
                    type: 'incoming',
                    time: 'May 17, 2019 12:05:00',
                    text: `Hi, how are you?`
                },
                {
                    id: 287072122284,
                    type: 'outgoing',
                    time: 'May 17, 2019 12:05:23',
                    text: `I'm fine! And you?`
                },
                {
                    id: 287072122285,
                    type: 'incoming',
                    time: 'May 17, 2019 12:07:03',
                    text: `I'm ok. I've got to say that I like your music!`
                },
                {
                    id: 287072122286,
                    type: 'outgoing',
                    time: 'May 17, 2019 12:08:49',
                    text: `Oh, thank you very much! It's very important for me.`
                },
                {
                    id: 287072122287,
                    type: 'incoming',
                    time: 'May 18, 2019 19:11:33',
                    text: `Lets compose something together!`
                },
                {
                    id: 287072122288,
                    type: 'outgoing',
                    time: 'May 18, 2019 19:13:17',
                    text: `That is a good idea `
                },
            ],
        },
        {
            id: 9253678003,
            name: 'George',
            avatarURL: 'https://iscale.iheart.com/catalog/artist/29143',
            messages: [
                {
                    id: 287072122289,
                    type: 'outgoing',
                    time: 'Aug 10, 1999 23:05:08',
                    text: `Hello!`
                },
                {
                    id: 287072122300,
                    type: 'incoming',
                    time: 'Aug 11, 1999 14:11:20',
                    text: `Hi!`
                },
                {
                    id: 287072122291,
                    type: 'incoming',
                    time: 'Aug 11, 1999 14:12:38',
                    text: `Where have you been for so long time?`
                },
                {
                    id: 287072122292,
                    type: 'outgoing',
                    time: 'Aug 11, 1999 14:14:06',
                    text: `I've been in India.`
                },
                {
                    id: 287072122293,
                    type: 'incoming',
                    time: 'Aug 11, 1999 14:15:18',
                    text: `And how is India? )`
                },
                {
                    id: 287072122294,
                    type: 'outgoing',
                    time: 'Aug 11, 1999 14:18:32',
                    text: `Fantastic! But you better see it yourself.`
                },
                {
                    id: 287072122295,
                    type: 'incoming',
                    time: 'Aug 11, 1999 14:20:35',
                    text: `Ok. I can even catch the last plane today to Delhi )`
                },
            ],

        },
        {
            id: 9253678004,
            name: 'Ringo',
            avatarURL: 'https://d2kdkfqxnvpuu9.cloudfront.net/images/big/74628.jpg?1475075592',
            messages: [
                {
                    id: 287072122296,
                    type: 'incoming',
                    time: 'Jun 1, 2022 23:23:00',
                    text: `Hi, I've got a question.`
                },
                {
                    id: 287072122297,
                    type: 'incoming',
                    time: 'Jun 1, 2022 23:23:13',
                    text: `What is your favourite color?`
                },
                {
                    id: 287072122298,
                    type: 'outgoing',
                    time: 'Jun 1, 2022 23:34:07',
                    text: `Hi! Mmm... Orange. But... why?`
                },
                {
                    id: 287072122299,
                    type: 'incoming',
                    time: 'Jun 1, 2022 23:45:43',
                    text: `I choose a car for you on your birthday :)`
                },
                {
                    id: 287072122300,
                    type: 'outgoing',
                    time: 'Jun 2, 2022 00:13:25',
                    text: `WHAT?!!!!`
                },
            ],
        },
        {
            id: 9253678005,
            name: 'Dolores',
            avatarURL: 'https://i.pinimg.com/736x/ff/8f/85/ff8f85ec7c67bc20836854e6c1143e49.jpg',
            messages: [
                {
                    id: 287072122301,
                    type: 'outgoing',
                    time: 'Jul 3, 2014 14:05:08',
                    text: `Hi! Where are you now?`
                },
                {
                    id: 287072122302,
                    type: 'incoming',
                    time: 'Jul 3, 2014 14:05:30',
                    text: `Hi, I'm home. Something happened?`
                },
                {
                    id: 287072122303,
                    type: 'outgoing',
                    time: 'Jul 3, 2014 14:07:19',
                    text: `Nothing serious. Just something is wrong with my phone. Can you call me now please?`
                },
                {
                    id: 287072122304,
                    type: 'incoming',
                    time: 'Jul 3, 2014 14:08:23',
                    text: `Little bit later. In several minutes, ok?`
                },
                {
                    id: 287072122305,
                    type: 'incoming',
                    time: 'Jul 3, 2014 14:18:25',
                    text: `Well, I'm calling. But you are not available. Try to reload your phone. Sometimes it helps.`
                },
                {
                    id: 287072122306,
                    type: 'outgoing',
                    time: 'Jul 3, 2014 14:20:19',
                    text: `Ok, thanks!`
                },
            ],
        },
        {
            id: 9253678006,
            name: 'Sting',
            avatarURL: 'https://i.discogs.com/0SNA0qJGLPxqLjNlPYtFQ06TpithNK3jLUZaP98tpXE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4Njk4/MC0xMTczMzg3OTg4/LmpwZWc.jpeg',
            messages: [
                {
                    id: 287072122307,
                    type: 'outgoing',
                    time: 'Jul 2, 2022 12:05:32',
                    text: `Hi, bro! Could you give me your auto for a day please?`
                },
                {
                    id: 287072122308,
                    type: 'outgoing',
                    time: 'Jul 2, 2022 12:08:11',
                    text: `I need to take out my family from Paris.`
                },
                {
                    id: 287072122309,
                    type: 'incoming',
                    time: 'Jul 2, 2022 12:12:00',
                    text: `Hi! Yes, sure!`
                },
                {
                    id: 287072122310,
                    type: 'incoming',
                    time: 'Jul 2, 2022 12:14:39',
                    text: `Call me when you can.`
                },
                {
                    id: 287072122311,
                    type: 'outgoing',
                    time: 'Jul 2, 2022 12:16:02',
                    text: `Thank you so much! I've been always sure that I can count on you! )`
                },
            ],
        },
        {
            id: 9253678007,
            name: 'Suzanne',
            avatarURL: 'https://secondhandsongs.com/picture/175050',
            messages: [
                {
                    id: 287072122312,
                    type: 'incoming',
                    time: 'Nov 11, 2018 23:24:18',
                    text: `Hi, how is life?`
                },
                {
                    id: 287072122313,
                    type: 'outgoing',
                    time: 'Nov 11, 2018 23:25:23',
                    text: `Hi! I'm fine!`
                },
                {
                    id: 287072122314,
                    type: 'outgoing',
                    time: 'Nov 11, 2018 23:46:39',
                    text: `I've bought a new guitar!`
                },
                {
                    id: 287072122315,
                    type: 'incoming',
                    time: 'Nov 12, 2018 00:12:52',
                    text: `That's great! Are you happy? )`
                },
                {
                    id: 287072122316,
                    type: 'outgoing',
                    time: 'Nov 12, 2018 00:13:28',
                    text: `Oh, year! I've been thinking about it for years. And now I'm really happy!`
                },
                {
                    id: 287072122317,
                    type: 'incoming',
                    time: 'Nov 12, 2018 00:15:03',
                    text: `So come on! Conquer the whole world with your music!`
                },
            ],
        }, {
            id: 9253678008,
            name: 'Morten',
            avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkkgryB7GlwVAbkA4rmnzt9GTr52r_N0_2A&usqp=CAU',
            messages: [
                {
                    id: 287072122318,
                    type: 'incoming',
                    time: 'Jul 25, 1984 22:14:18',
                    text: `Take on me!`
                },
                {
                    id: 287072122319,
                    type: 'outgoing',
                    time: 'Jul 25, 1984 23:20:23',
                    text: `Excuse me... What are you about?`
                },
                {
                    id: 287072122320,
                    type: 'incoming',
                    time: 'Jul 26, 1984 00:15:52',
                    text: `Take me on!`
                },
                {
                    id: 287072122321,
                    type: 'outgoing',
                    time: 'Jul 26, 1984 00:23:28',
                    text: `Are you nuts, guy?`
                },
                {
                    id: 287072122322,
                    type: 'incoming',
                    time: 'Jul 27, 1984 09:45:03',
                    text: `I'll be gone`
                },
                {
                    id: 287072122323,
                    type: 'incoming',
                    time: 'Jul 27, 1984 09:47:03',
                    text: `in a day or two.`
                },
                {
                    id: 287072122324,
                    type: 'outgoing',
                    time: 'Jul 27, 1984 10:00:28',
                    text: `WTF! What's wrong with you, boy?!`
                },
                {
                    id: 287072122325,
                    type: 'incoming',
                    time: 'Jul 27, 1984 10:07:03',
                    text: `You don't understand. I'm absolutely happy! That's gonna be the greatest hit ever!`
                },
            ],
        }
    ],

    _newRender() {
    },
    sendRenderAll(observer) {
        this._newRender = observer
    },

    getMenu() {
        return this._menu
    },
    getProfile() {
        return this._profile
    },
    getPosts() {
        return this._posts
    },
    getDialogs() {
        return this._dialogs
    },
    profileAvatarURL: profileAvatarURL,

    dispatch(action) {
        this._posts = postsReducer(this._posts, action)
        this._dialogs = dialogsReducer(this._dialogs, action)
        this._newRender()
    }
}

export default state