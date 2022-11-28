import axios from "axios";
import configFile from "../config.json";
import { toast } from "react-toastify";

axios.defaults.baseURL = configFile.apiEndpoint;

axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
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
