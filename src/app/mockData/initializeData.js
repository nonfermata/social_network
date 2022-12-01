import allData from "./allData.json";
import httpService from "../services/http.service";

async function initialize() {
    try {
        await allData.users.forEach((item) => {
            httpService.put("users/" + item._id, item);
        });
        await allData.messages.forEach((item) => {
            httpService.put("messages/" + item._id, item);
        });
        await allData.posts.forEach((item) => {
            httpService.put("posts/" + item._id, item);
        });
    } catch (e) {
        console.log(e);
    }
}

export default initialize;
