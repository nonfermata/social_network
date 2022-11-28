const posts = [
    {
        _id: "1640010631826",
        authorId: "9253678005",
        created_at: "1640010631826",
        title: "Provident repellendus",
        content:
            "Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto!",
        likes: 25
    },
    {
        _id: "1660482608272",
        authorId: "9253678004",
        created_at: "1660482608272",
        title: "Cumque fugiat veritatis",
        content:
            "Bit amet consectetur adipisicing elit, aliquid similique nulla perferendis ullam dolorum ab. Quos adipisci alias dolor maxime id, assumenda aperiam, quibusdam saepe, modi iusto aspernatur fugiat tempore officia repellendus? Quasi commodi maiores minus tenetur suscipit delectus, nisi in soluta. Harum recusandae atque voluptas exercitationem ex odio dolor voluptatibus perferendis quisquam tenetur velit molestias voluptatem totam, laboriosam amet ad quae a nihil nemo dicta? Eius, voluptates molestias fugiat obcaecati omnis perferendis animi nobis voluptatem vitae necessitatibus quas modi quo libero culpa laboriosam possimus consequuntur facere deserunt repudiandae consectetur. Quaerat esse illum nemo sint, minima placeat reiciendis totam incidunt sunt?",
        likes: 12
    },
    {
        _id: "1600109436782",
        authorId: "9253678001",
        created_at: "1600109436782",
        title: "Ipsum dolor sit",
        content:
            "Amen lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fugiat veritatis rem sequi sed velit id illo provident repellendus nihil! Harum, velit doloremque quibusdam minus dolore commodi aut iusto architecto!",
        likes: 22
    },
    {
        _id: "1668690608295",
        authorId: "9253678002",
        created_at: "1668690608295",
        title: "Similique nulla perferendis",
        content:
            "Dolor sit amet consectetur adipisicing elit. Id inventore quasi cum at fugiat magni laboriosam exercitationem eum quo ipsa non sint molestias numquam, obcaecati dignissimos corporis. Minima, cumque blanditiis nulla provident ducimus magnam, quisquam tempora architecto esse mollitia aperiam consequatur explicabo itaque sequi quos quae a veritatis pariatur facilis voluptatem iste exercitationem id est! Rerum deleniti tenetur, eveniet autem hic ipsa adipisci pariatur magni ipsam neque. Explicabo adipisci blanditiis deserunt asperiores, exercitationem eligendi quisquam obcaecati iusto.",
        likes: 17
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(posts);
        }, 500);
    });

export default {
    fetchAll
};
