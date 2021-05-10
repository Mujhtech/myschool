import { http } from "./http";
const CryptoJS = require("crypto-js");

export function register(user) {
    return http().post('/auth/register', user);
}

export function login(user) {
    return http().post('/auth/login', user)
        .then(response => {
            console.log(response);
            if(response.data.status === 200){
                setToken(response.data);
            }
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

function setToken(user){
    const token = CryptoJS.AES.encrypt({user: user}, 'laravellaravelvuevuespaspa').toString();
    localStorage.setItem('laravelVueSpa', token);
}

export function isLoggedIn() {
    const token = localStorage.getItem('laravelVueSpa');
    return token != null;
}

export function logout() {
    http().get('/auth/logout');
    localStorage.removeItem('laravelVueSpa');
}

export function getAccessToken() {
    const token = localStorage.getItem('laravelVueSpa');
    if (!token){
        return null;
    }

    const bytes = CryptoJS.AES.decrypt(token, "laravellaravelvuevuespaspa");
    const tokenData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return tokenData.user.access_token;
}

export function getProfile() {
    return http().get('/auth/profile');
}
