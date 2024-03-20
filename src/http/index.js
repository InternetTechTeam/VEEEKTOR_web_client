import axios from "axios";
import { selectExpDate } from "../store/slices/userSlice";
import { isTokenExpired } from "../utils/tokens";

const API_URL = "/api/";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}
);

export default $api;
