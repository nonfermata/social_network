import axios from "axios";
import configFile from "../config.json";
import { toast } from "react-toastify";

axios.defaults.baseURL = configFile.apiEndpoint;

axios.interceptors.request.use(
    function (request) {
        if (configFile.isFireBase) {
            request.url =
                (/\/$/.test(request.url)
                    ? request.url.slice(0, -1)
                    : request.url) + ".json";
        }
        return request;
    },
    function (error) {
        Promise.reject(error);
    }
);

const transformData = (response) => {
    if (response) {
        const { data } = response;
        return { data: Object.values(data) };
    }
};

axios.interceptors.response.use(
    function (response) {
        if (configFile.isFireBase) {
            return transformData(response);
        }
        return response;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            console.log(error);
            toast.error("Something is wrong... Try later.");
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};

export default httpService;
