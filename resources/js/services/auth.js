import { http } from "./http";
var CryptoJS = require("crypto-js");

export function register(data) {
    return http().post('/auth/register', data);
}

export function login(data) {
    return http().post('/auth/login', data)
        .then(response => {
            console.log(response);
            if(response.data.status === 200){
                setToken(response.data);
            }
            return response.data;
        });
}

function setToken(user){
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify({user: user}), 'laravellaravelvuevuespaspa');
    console.log(ciphertext.toString());
    localStorage.setItem('laravelReactSpa', ciphertext);
}

export function isLoggedIn() {
    const token = localStorage.getItem('laravelReactSpa');
    return token != null;
}

export function userLogout() {
    http().get('/auth/logout');
    localStorage.removeItem('laravelReactSpa');
}

export function getAccessToken() {
    const user = localStorage.getItem('laravelReactSpa');
    if (!user){
        return null;
    }

    var bytes  = CryptoJS.AES.decrypt(user.toString(), 'laravellaravelvuevuespaspa');
    var plaintext = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return plaintext.user.access_token;
}

export function getProfile() {
    return http().get('/auth/profile');
}

export function lockUser() {
    return http().get('/auth/lock');
}

export function unlockUser(data) {
    return http().post('/auth/unlock', data);
}
