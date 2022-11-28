import httpService from "./http.service";

const messagesEndpoint = "messages/";

const messagesService = {
    get: async () => {
        const { data } = await httpService.get(messagesEndpoint);
        return data;
    }
};

export default messagesService;
