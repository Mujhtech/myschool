import axios from 'axios';
import { Constant } from '../constant';

export function http() {
    return axios.create({
        baseURL: Constant.API_URL,
        headers: {
            Authorization: 'Bearer ',
        }
    });
}

export function httpFile() {
    return axios.create({
        baseURL: Constant.API_URL,
        headers: {
            Authorization: 'Bearer ',
            'Content-Type': 'multipart/form-data'
        }
    });
}
