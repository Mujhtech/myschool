import axios from 'axios';
import { Constant } from '../constant';
import { getAccessToken } from "./auth";

export function http() {
    return axios.create({
        baseURL: Constant.API_URL,
        headers: {
            Authorization: 'Bearer '+getAccessToken(),
        }
    });
}

export function httpFile() {
    return axios.create({
        baseURL: Constant.API_URL,
        headers: {
            Authorization: 'Bearer '+getAccessToken(),
            'Content-Type': 'multipart/form-data'
        }
    });
}
