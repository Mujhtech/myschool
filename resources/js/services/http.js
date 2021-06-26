import axios from 'axios';
import { Constant } from '../constant';
import { getAccessToken } from "./auth";

export function http() {
    return axios.create({
        responseType: 'json',
        baseURL: Constant.API_URL,
        headers: {
            'access-control-allow-origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+getAccessToken(),
        }
    });
}

export function httpFile() {
    return axios.create({
        responseType: 'json',
        baseURL: Constant.API_URL,
        headers: {
            'access-control-allow-origin': '*',
            'Authorization': 'Bearer '+getAccessToken(),
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        }
    });
}
