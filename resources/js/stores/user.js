import { Constant } from "../constant"

export const userInitState = {
    user: {},
    isLoggedIn: false,
    isLocked: false
}
export const userReducer = (state = userInitState, {type, payload}) => {
    switch (type){
        case Constant.SET_USER_LOGIN:
            return {...state, user: payload, isLoggedIn: true, isLocked: payload.locked }
        case Constant.SET_USER_PROFILE:
            return {...state, user: payload, isLoggedIn: true, isLocked: payload.locked }
        case Constant.SET_USER_LOGOUT:
            return {...state, user: {}, isLoggedIn: false }
        case Constant.SET_USER_LOCK:
            return {...state, user: payload, isLocked: payload.locked }
        case Constant.SET_USER_UNLOCK:
            return {...state, user: payload, isLocked: payload.locked }
        default:
            return state;
    }
}
