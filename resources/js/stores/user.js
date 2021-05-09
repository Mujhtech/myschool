import { Constant } from "../constant"

const iniState = {
    user: {},
    isLoggedIn: false
}
export const userReducer = (state = iniState, {type, payload}) => {
    switch (type){
        case Constant.SET_USER_LOGIN:
            return {...state, user: payload}
        default:
            return state;
    }
}
