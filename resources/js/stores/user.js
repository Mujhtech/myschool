import { Constant } from "../constant"

export const userInitState = {
    user: {},
    isLoggedIn: false
}
export const userReducer = (state = userInitState, {type, payload}) => {
    switch (type){
        case Constant.SET_USER_LOGIN:
            return {...state, user: payload}
        default:
            return state;
    }
}
