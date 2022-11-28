import httpService from "./http.service";

const profileEndpoint = "profile/";

const profileService = {
    get: async () => {
        const { data } = await httpService.get(profileEndpoint);
        return data;
    }
};

export default profileService;
