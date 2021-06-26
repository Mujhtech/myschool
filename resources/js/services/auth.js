import { http } from "./http";
//const CryptoJS = require("crypto-js");

export function register(data) {
    return http().post('/auth/register', data);
}

export function login(data) {
    return http().post('/auth/login', data)
        .then(response => {
            if(response.data.status === 200){
                setToken(response.data);
            }
            return response.data;
        });
}

function setToken(user){
    //const token = CryptoJS.AES.encrypt({user: user}, 'laravellaravelvuevuespaspa').toString();
    localStorage.setItem('laravelReactSpa', user);
}

export function isLoggedIn() {
    const token = localStorage.getItem('laravelReactSpa');
    return token != null;
}

export function logout() {
    http().get('/auth/logout');
    localStorage.removeItem('laravelReactSpa');
}

export function getAccessToken() {
    const token = localStorage.getItem('laravelReactSpa');
    if (!token){
        return null;
    }

    //const bytes = CryptoJS.AES.decrypt(token, "laravellaravelvuevuespaspa");
    //const tokenData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    //return tokenData.user.access_token;
}

export function getProfile() {
    return http().get('/auth/profile');
}
